"use strict";

const data = {
    population: 23,
    mood: 0.5
};

// const jsonString = JSON.stringify(jsonData);
// const parsedData = JSON.parse(jsonString);
// console.log(data.population);

export class State {
    constructor(population, mood = 0.5, utsNum, villageNum, cityNum) {
        this.population = population;
        this.mood = mood;
        this.utsNum = utsNum;
        this.villageNum = villageNum;
        this.cityNum = cityNum;
    }
    changePop(settlementsArr) {
        for (let i = 0; i < settlementsArr.length; i++) {
            const increaseAmount = (settlementsArr[i] * (Math.random() * 0.4) + 0.1) / 100;
            const increasedNumber = settlementsArr[i] + increaseAmount;
            settlementsArr[i] = Math.ceil(increasedNumber);
        }
        // console.log(settlementsArr);
        let totalPop = settlementsArr.reduce((a, b) => a + b, 0);
        return totalPop;
    }
    changeMood() {
        this.mood = 0.6;
        // return this.mood;
    }
    genSettlements(settlementCount, minPop, maxPop) {
        let settlementsArr = [];
        for (let i = 0; i < settlementCount; i++) {
            let settlementPop = Math.floor(Math.random() * (maxPop - minPop)) + minPop;
            settlementsArr.push(settlementPop);
        }
        // console.log(settlementsArr);
        let totalPop = settlementsArr.reduce((a, b) => a + b, 0);
        return [settlementsArr, totalPop];
    }
}
