import Big from './big.mjs';

const a1 = new Big('3.8e-14');

// Temeperature
const b1 = new Big('2e-15');

// Relative Humidity
const c1 = new Big('-2.8e-15');
const c2 = new Big('2.9e-17');
const c3 = new Big('-1.1e-19');

// Wind speed
const d1 = new Big('-2.5e-15');
const d2 = new Big('1.2e-15');
const d3 = new Big('-8.5e-17');

// constant
const e = new Big('-5.3e-13');


const calcT =(temp)=>  b1.times(temp+273.15);
const calcU = (windsp) => {
    return d1.times(windsp).plus(d2.times(windsp*windsp)).plus(d3.times(windsp*windsp*windsp));
}
const calcRH = (rh) => {
    return c1.times(rh).plus(c2.times(rh*rh)).plus(c3.times(rh*rh*rh))
};

const calcCn = (W, temp, windsp, rh)=> {
    console.log("calcT:"+calcT(temp));
    console.log("calcU:"+calcU(windsp));
    console.log("calcRH:"+calcRH(rh));
    return a1.times(W).add(calcT(temp)).add(calcU(windsp)).add(calcRH(rh)).add(e)
}

export {calcT, calcU, calcRH, calcCn};