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

const Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  aveCookieSales: 6.3,
  randomInteger: function () {
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
};
const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  aveCookieSales: 3.7,
};
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  aveCookieSales: 2.3,
};
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  aveCookieSales: 4.6,
};
