"use strict"

import { State } from "../state/State.js";

const populationDisplay = document.querySelector('#population-display');
const utsNumDisplay = document.querySelector('#uts-num-display');
const villageNumDisplay = document.querySelector('#village-num-display');
const cityNumDisplay = document.querySelector('#city-num-display');
const villagePopulationDisplay = document.querySelector('#village-population-display');
const utsPopulationDisplay = document.querySelector('#uts-population-display');
const cityPopulationDisplay = document.querySelector('#city-population-display');


class Statistics extends State {
  constructor(population, mood, utsNum, villageNum, cityNum) {
    super(population, mood, utsNum, villageNum, cityNum);
  }

  showPopulation = () => {
    populationDisplay.textContent = this.population.toLocaleString("en-US");
    // this.changePopulation();
  }
  showNumOfsettlements = () => {
    utsNumDisplay.textContent = this.utsNum.toLocaleString("en-US");
    villageNumDisplay.textContent = this.villageNum.toLocaleString("en-US");
    cityNumDisplay.textContent = this.cityNum.toLocaleString("en-US");
  }
  showPopulationOfsettlements = (settlementsNum, min, max, populationDisplay) => {
    let settlementArr = this.generateSettlement(settlementsNum, [], min, max);
    let totalPopulation = settlementArr.reduce((a, b) => a + b, 0);
    populationDisplay.textContent = totalPopulation.toLocaleString("en-US");
    return totalPopulation;
  }
}

let statistics = new Statistics(995, 0.5, 34, 670, 12);
statistics.showNumOfsettlements();

let utsPopulation = statistics.showPopulationOfsettlements(statistics.utsNum, 4000, 8000, utsPopulationDisplay);
let villagePopulation = statistics.showPopulationOfsettlements(statistics.villageNum, 5, 3000, villagePopulationDisplay);
let cityPopulation = statistics.showPopulationOfsettlements(statistics.cityNum, 10000, 1000000, cityPopulationDisplay);
let totalPopulation = utsPopulation + villagePopulation + cityPopulation;
statistics.population = totalPopulation;

statistics.showPopulation();
setInterval(() => {
  statistics.showPopulation();
  statistics.changePopulation(villagePopulation);
  statistics.changePopulation(cityPopulation);
  statistics.changePopulation(utsPopulation);
}
  , 1000);
setTimeout(() => statistics.changeMood(), 5000);

// document.querySelector('#show-statistics-btn').addEventListener('click', () => {
//   statistics.showPopulation();
// });
