"use strict"

import { State } from "../state/State.js";

const populationDisplay = document.querySelector('#population-display');
const utsNumDisplay = document.querySelector('#uts-num-display');
const villageNumDisplay = document.querySelector('#village-num-display');
const cityNumDisplay = document.querySelector('#city-num-display');
const villagePopDisplay = document.querySelector('#village-population-display');
const utsPopDisplay = document.querySelector('#uts-population-display');
const cityPopDisplay = document.querySelector('#city-population-display');
const bornDisplay = document.querySelector('#born-display');
const deadDisplay = document.querySelector('#dead-display');


class Statistics extends State {
  constructor(population, mood, utsNum, villageNum, cityNum) {
    super(population, mood, utsNum, villageNum, cityNum);
  }

  showPopulation = (villagePop, utsPop, cityPop) => {
    populationDisplay.textContent = this.population.toLocaleString("en-US");
    villagePopDisplay.textContent = villagePop;
    utsPopDisplay.textContent = utsPop;
    cityPopDisplay.textContent = cityPop;
  }
  showSettlementsCount = () => {
    utsNumDisplay.textContent = this.utsNum.toLocaleString("en-US");
    villageNumDisplay.textContent = this.villageNum.toLocaleString("en-US");
    cityNumDisplay.textContent = this.cityNum.toLocaleString("en-US");
  }
  showBornAndDead = (born, dead) => {
    bornDisplay.textContent = born;
    deadDisplay.textContent = dead;
  }
}

let statistics = new Statistics(995, 0.5, 34, 670, 12);

let villageData = statistics.genSettlements(statistics.villageNum, 5, 300);
let utsData = statistics.genSettlements(statistics.utsNum, 4000, 8000);
let cityData = statistics.genSettlements(statistics.cityNum, 9000, 1000000);
statistics.population = villageData[1] + utsData[1] + cityData[1];
statistics.showPopulation(villageData[1], utsData[1], cityData[1]);
statistics.showSettlementsCount();

setInterval(() => {
  let villagePop = statistics.changePop(villageData[0]);
  let utsPop = statistics.changePop(utsData[0]);
  let cityPop = statistics.changePop(cityData[0]);
  statistics.population = villagePop[0] + utsPop[0] + cityPop[0];
  let born = villagePop[1] + utsPop[1] + cityPop[1];
  let dead = villagePop[2] + utsPop[2] + cityPop[2];
  console.log(villagePop[1], dead)
  statistics.showPopulation(villagePop[0], utsPop[0], cityPop[0]);
  statistics.showBornAndDead(born, dead);
}, 1000);
setTimeout(() => statistics.changeMood(), 5000);

// document.querySelector('#show-statistics-btn').addEventListener('click', () => {
//   statistics.showPopulation();
// });
