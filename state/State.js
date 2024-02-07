"use strict";

const data = {
    population: 23,
    mood: 0.5
};

// const jsonString = JSON.stringify(jsonData);
// const parsedData = JSON.parse(jsonString);
console.log(data.population);

export class State {
    constructor(population, mood = 0.5, utsNum, villageNum, cityNum) {
        this.population = population;
        this.mood = mood;
        this.utsNum = utsNum;
        this.villageNum = villageNum;
        this.cityNum = cityNum;
    }
    changePopulation() {
        const increaseAmount = (this.population * (this.mood * 0.0004)) / 100;
        const increasedNumber = this.population + increaseAmount;
        console.log(Math.floor(increaseAmount));
        this.population = Math.floor(increasedNumber);
        return this.population;
    }
    changeMood() {
        this.mood = 0.6;
        // return this.mood;
    }
    generateSettlement(numOfsettlements, settlements = [], min, max) {
        for (let i = 0; i < numOfsettlements; i++) {
            let settlementPopulation = Math.floor(Math.random() * (max - min)) + min;
            settlements.push(settlementPopulation);
        }
        console.log(settlements);
        return settlements;
    }
}
