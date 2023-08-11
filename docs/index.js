//import XMLHttpRequest from 'xhr2';
/* Concept and Application of Macroscale Meteorogoical Models */
// this model for Cn^2 applies to 15m 해발고도
import {temp_weights} from './module/weights.js';
import {calcCn} from './module/calc2.js';

import {positions} from './module/geoloc.js'

// Relative Weight about Temporal Hour Interval
let W = 0;
const jsonArray= [];
let targetTimeArray = [];

let dateForm = document.querySelector('form[id="timepicker"]');

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(36, 128),
    level: 13   
};
var map = new kakao.maps.Map(container, options);





dateForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let date="";
    let time="";
    
    let date_ = event.target['date'].value;
    let time_ = event.target['time'].value;
    time = time_.slice(0,2)+time_.slice(3,5);

    const target_date = date_+" "+time_.slice(0,2)+":"+"00";
    
    targetTimeArray = [];

    for(let obj of jsonArray){
        if(target_date==obj["일시"]){
            targetTimeArray.push(obj);
        }
    }
    
    console.log("찾은대상",targetTimeArray);

    let date_array=date_.split('-');
    for(let i in date_array){
        date+=date_array[i];
    }
    let xhr = new XMLHttpRequest();
    let url = 'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo'; /*URL*/
    let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'K26aoEyAjkg0W2KwK39LTQBm9Ks9ffZnpdxk26iyxGnsq9RXmifcvZ8V%2BuhcIWXCxPtyc6xO7sJtn%2FobRtR3ow%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('locdate') + '=' + encodeURIComponent(date); /**/
    queryParams += '&' + encodeURIComponent('location') + '=' + encodeURIComponent('대전'); /**/

    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if(this.status==200){
                let t_xml = this.responseText;
                
                // text를 xml document로 변환
                let parserXML = new DOMParser();
                let xmlDoc = parserXML.parseFromString(t_xml, "text/xml");
                
                let sunrise = parseInt(xmlDoc.getElementsByTagName("sunrise")[0].textContent);
                
                // time difference
                const timePick = new Date('2023/06/01 '+`${parseInt(sunrise/100)}:${sunrise%100}:00`)
                const timeRise = new Date('2023/06/01 '+`${time_}`)
                console.log(timePick, timeRise);
                
                const diffMsec = timeRise.getTime() - timePick.getTime();
                const diffHour = Math.round(diffMsec / (60*60*1000));
                console.log(`시간의 차이는 ${diffHour}시간 입니다.`);  // 결과: '시간의 차이는 3시간 입니다.'
                W = temp_weights.at(diffHour);
                document.getElementById("wvalue").innerText = W;
            }
        }
    };
    xhr.send('');

    
    // 계산 작업
    let c_n=0;
    let T, U, RH=0;
    
    const cardContainer = document.getElementById("cardContainer")
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
    console.log(cardContainer);
    // targetTimeArray에서 가져오기
    for(let obj of targetTimeArray){
        T = parseInt(obj['기온(°C)']);
        if(obj['풍속(m/s)'][0]==='.'){
            U = parseInt("0"+obj['풍속(m/s)']);
        }
        else{
            U = parseInt(obj['풍속(m/s)']);
        }

        RH = parseInt(obj['습도(%)']);
        c_n=calcCn(W,T,U,RH);
        
        console.log(c_n);
        let loc = obj['지점명'];

        // display 작업
        document.getElementById('tableCard').style.display ="block";
        const weatherContent = document.createElement("tr");
        const contents = `<td>${loc}</td><td>${c_n}</td><td>${T}℃</td><td>${U}m/s</td><td>${RH}%</td>`
        weatherContent.innerHTML = contents
        
        cardContainer.appendChild(weatherContent);

        // map display 작업
        

        for (var i = 0; i < positions.length; i ++) {
            if (positions[i]["지점명"]===loc){
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(positions[i]["lat"], positions[i]["lng"]) // 마커의 위치
                });

                // 마커에 표시할 인포윈도우를 생성합니다 
                var infowindow = new kakao.maps.InfoWindow({
                    content: `<div><b>${c_n}</b><br/>${contents}</div>` // 인포윈도우에 표시할 내용
                });

                // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                // 이벤트 리스너로는 클로저를 만들어 등록합니다 
                // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
            }
        }
    }
})

console.log(1000);

document.addEventListener("DOMContentLoaded", function(){
    const fileInput = document.getElementById("file");
    const readButton = document.getElementById('readButton');

    readButton.addEventListener("click", function(){
        console.log("click...")
        const file = fileInput.files[0];
        const reader = new FileReader();
        // Legacy multi-byte Korean encodings "EUC-KR"
        reader.readAsText(file, "cseuckr"); 

        
        reader.onload = function(event){
            const csvdata = event.target.result;
            let rows = csvdata.split('\r\n');
            
            

            const header = rows[0].split(",");
            console.log("header:", header);
            console.log("rows length:", rows.length);
            
            for(let i=1; i<rows.length;i++){
                const row = rows[i].split(",");
                const obj = {};

                for(let j=0; j<header.length;j++){    
                    obj[header[j]] = row[j];
                }
                jsonArray.push(obj);
            }
            console.log(jsonArray);
            alert("Reading Success");
        };
        
    })
    
});




// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return ()=>{infowindow.open(map, marker);};
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return ()=>{infowindow.close();};
}



