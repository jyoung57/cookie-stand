const Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  aveCookieSales: 6.3,
  randomInteger: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};
function cookieCount (city) {
  let h2 = document.createElement('h2');
  h2.innerText = city.name; 
  let main = document.getElementById('cities');
  main.appendChild(h2);
  let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = city.randomInteger();
  ul.appendChild(li);
  main.appendChild(ul);
}
// for (let i = 0; i < 14; i++) {
// }
cookieCount (Seattle);