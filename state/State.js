"use strict";

const data = {
    population: 23,
    mood: 0.5
};

// const jsonString = JSON.stringify(jsonData);
// const parsedData = JSON.parse(jsonString);
// console.log(data.population);

export class State {
    constructor(population, mood = 60, utsNum, villageNum, cityNum) {
        this.population = population;
        this.mood = mood;
        this.utsNum = utsNum;
        this.villageNum = villageNum;
        this.cityNum = cityNum;
    }
    changePop(settlementsArr) {
        let born = 0;
        let dead = 0;
        for (let i = 0; i < settlementsArr.length; i++) {
            const increasedPop = Math.ceil(settlementsArr[i] * ((this.mood / 1000000) + 1));
            born += (increasedPop - settlementsArr[i]);
            settlementsArr[i] = increasedPop;

            const decreasedPop = Math.ceil(settlementsArr[i] * (((100 - this.mood) / 1000000) + 1));
            dead += (decreasedPop - settlementsArr[i]);
            settlementsArr[i] = decreasedPop;
        }
        let totalPop = settlementsArr.reduce((a, b) => a + b, 0);
        return [totalPop, born, dead];
    }
    changeMood() {
        this.mood = 60;
        // return this.mood;
    }
    genSettlements(settlementCount, minPop, maxPop) {
        let settlementsArr = [];
        for (let i = 0; i < settlementCount; i++) {
            let settlementPop = Math.floor(Math.random() * (maxPop - minPop)) + minPop;
            settlementsArr.push(settlementPop);
        }
        let totalPop = settlementsArr.reduce((a, b) => a + b, 0);
        return [settlementsArr, totalPop];
    }
}
