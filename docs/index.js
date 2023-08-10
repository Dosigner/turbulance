//import XMLHttpRequest from 'xhr2';
/* Concept and Application of Macroscale Meteorogoical Models */
// this model for Cn^2 applies to 15m 해발고도
import {temp_weights} from './module/weights.js';
import {calcCn} from './module/calc.js';
// Relative Weight about Temporal Hour Interval
let W = 0;
const jsonArray= [];
let targetTimeArray = [];

let dateForm = document.querySelector('form[id="timepicker"]');


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
        c_n = c_n.toFixed(3);
        
        console.log(c_n);
        let loc = obj['지점명'];

        // display 작업
        const card = document.createElement("div");

        const cardTitle = document.createElement("h4");
        cardTitle.textContent = `${loc}의 Cn^2(m*10^-15) = ${c_n}`;

        //const cContent = document.createElement("p");
        //cContent.textContent = c_n;
        
        const weatherContent = document.createElement("p");
        weatherContent.textContent = `온도: ${T}℃, 바람: ${U}m/s, 습도: ${RH}%`

        card.appendChild(cardTitle);
        card.appendChild(weatherContent);

        cardContainer.appendChild(card);
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
        };
    })

});