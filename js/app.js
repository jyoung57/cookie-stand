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
  '8pm',
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
City.prototype.render = function () {
  let main = document.getElementById('cities');
  let table = document.createElement('table');
  main.appendChild(table);
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  for (let i = 0; i < hoursOpen.length; i++) {
    let header = document.createElement('th');
    header.textContent = hoursOpen[i];
    headerRow.appendChild(header);
  }

  let totalSales = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let cityDataRow = document.createElement('tr');
    let hourlySales = Math.floor(
      this.randomNumberOfCustomers() * this.aveCookieSales
    );
    totalSales += hourlySales;
    console.log(totalSales);
    li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
  }
  let total = document.createElement('li');
  total.innerText = `Total: ${totalSales} cookies`;
  ul.appendChild(total);
};
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
console.log(City);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// function cookieCount(city) {
//   let h2 = document.createElement('h2');
//   h2.innerText = city.name;
//   let main = document.getElementById('cities');
//   main.appendChild(h2);
//   let ul = document.createElement('ul');
//   main.appendChild(ul);
//   let totalSales = 0;
//   for (let i = 0; i < hoursOpen.length; i++) {
//     let li = document.createElement('li');
//     let hourlySales = Math.floor(
//       city.randomNumberOfCustomers() * city.aveCookieSales
//     );
//     totalSales += hourlySales;
//     console.log(totalSales);
//     li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
//     ul.appendChild(li);
//   }
//   let total = document.createElement('li');
//   total.innerText = `Total: ${totalSales} cookies`;
//   ul.appendChild(total);
// }

// cookieCount(seattle);
// cookieCount(tokyo);
// cookieCount(dubai);
// cookieCount(paris);
// cookieCount(lima);
