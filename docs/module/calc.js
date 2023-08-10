const calcT =(temp)=> 2 *(temp+273);
const calcU = (windsp) => {
    return -2.5*windsp + 1.2*windsp*windsp - 8.5*0.01*Math.pow(windsp,3);
}
const calcRH = (rh) => {
    return -2.8*rh + 2.9*0.01*rh*rh - 1.1*0.0001*Math.pow(rh,3)
};

const calcCn = (W, temp, windsp, rh)=> {
    console.log("calcT:"+calcT(temp));
    console.log("calcU:"+calcU(windsp));
    console.log("calcRH:"+calcRH(rh));
    return 3.8*10*W + calcT(temp) + calcU(windsp) + calcRH(rh) - 5.3*100;   
}

export {calcT, calcU, calcRH, calcCn};