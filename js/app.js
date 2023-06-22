const hoursOpen = [
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

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  aveCookieSales: 6.3,
  randomNumberOfCustomers: function () {
    return Math.floor(
      Math.random() * (this.maxCust - this.minCust) + this.maxCust
    );
  },
};
const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  aveCookieSales: 1.2,
  randomNumberOfCustomers: function () {
    return Math.floor(
      Math.random() * (this.maxCust - this.minCust) + this.maxCust
    );
  },
};
const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  aveCookieSales: 3.7,
  randomNumberOfCustomers: function () {
    return Math.floor(
      Math.random() * (this.maxCust - this.minCust) + this.maxCust
    );
  },
};
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  aveCookieSales: 2.3,
  randomNumberOfCustomers: function () {
    return Math.floor(
      Math.random() * (this.maxCust - this.minCust) + this.maxCust
    );
  },
};
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  aveCookieSales: 4.6,
  randomNumberOfCustomers: function () {
    return Math.floor(
      Math.random() * (this.maxCust - this.minCust) + this.maxCust
    );
  },
};
function cookieCount(city) {
  let h2 = document.createElement('h2');
  h2.innerText = city.name;
  let main = document.getElementById('cities');
  main.appendChild(h2);
  let ul = document.createElement('ul');
  main.appendChild(ul);
  let totalSales = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let li = document.createElement('li');
    let hourlySales = Math.floor(
      city.randomNumberOfCustomers() * city.aveCookieSales
    );
    totalSales += hourlySales;
    console.log(totalSales);
    li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
    ul.appendChild(li);
  }
  let total = document.createElement('li');
  total.innerText = `Total: ${totalSales} cookies`;
  ul.appendChild(total);
}
// for (let i = 0; i < 14; i++) {
// }
cookieCount(seattle);
cookieCount(tokyo);
cookieCount(dubai);
cookieCount(paris);
cookieCount(lima);
