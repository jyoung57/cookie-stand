'use strict';
const hoursOpen = [
  '',
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '',
];

function City(name, minCust, maxCust, aveCookieSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSales = aveCookieSales;
}
City.prototype.randomNumberOfCustomers = function () {
  return Math.floor(
    Math.random() * (this.maxCust - this.minCust) + this.maxCust
  );
};
let main = document.getElementById('cities');
let table = document.createElement('table');
main.appendChild(table);
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
const allCities = [seattle, tokyo, dubai, paris, lima];
let headerRow = document.createElement('tr');
table.appendChild(headerRow);
let tableBody = document.createElement('tbody');
table.appendChild(tableBody);
for (let i = 0; i < hoursOpen.length - 1; i++) {
  let header = document.createElement('th');
  header.textContent = hoursOpen[i];
  headerRow.appendChild(header);
  if (i === hoursOpen.length - 2) {
    let totalTh = document.createElement('th');
    totalTh.innerText = 'Daily Location Total';
    headerRow.appendChild(totalTh);
  }
}
const cityArray = [];
City.prototype.render = function () {
  let totalSales = 0;

  let cityDataRow = document.createElement('tr');
  tableBody.appendChild(cityDataRow);
  cityDataRow.id = this.name;
  let dateRow = document.createElement('td');
  cityDataRow.appendChild(dateRow);
  dateRow.innerText = this.name;
  const citySales = [];

  for (let i = 0; i < hoursOpen.length - 2; i++) {
    let hourlySales = Math.floor(
      this.randomNumberOfCustomers() * this.aveCookieSales
    );
    citySales.push(hourlySales);
    let td = document.createElement('td');
    td.innerText = hourlySales;
    cityDataRow.appendChild(td);
    totalSales += hourlySales;
    console.log(i, hoursOpen.length);
    if (i === 13) {
      let totalTh = document.createElement('td');
      totalTh.innerText = totalSales;
      cityDataRow.appendChild(totalTh);
      console.log('random text');
    }
  }
  console.log(citySales);
  cityArray.push(citySales);
};
function footerFunction() {
  let td = document.createElement('td');
  td.innerText = 'Totals';
  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.appendChild(td);
  for (let i = 0; i < cityArray; i++) {
    let total = 0;
  }
}

console.log(City);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
footerFunction();
console.log(cityArray);
