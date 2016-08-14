var timeOpen =
['6:00am','7:00am','8:00am',
'9:00am','10:00am',':0011am',
'12:00pm','1:00pm','2:00pm',
'3:00pm','4:00pm','5:00pm',
'6:00pm','7:00pm','8:00pm',];

var coffeeShops = [];
console.log(coffeeShops);

function CoffeeShop(name, minCustomer, maxCustomer, averageCup, averagePound) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCup = averageCup;
  this.averagePound = averagePound;
  this.customerPerHour = [];
  this.cupPerHour = [];
  this.poundsForCupsHourly = [];
  this.poundToGoHour = [];
  this.poundOverAllHourly = [];
  this.customerTotal = 0;
  this.cupTotal = 0;
  this.poundsForCupsTotal = 0;
  this.poundToGoTotal = 0;
  this.poundOverAllTotal = 0;
  this.empNeeded = [];
  coffeeShops.push(this);
};
CoffeeShop.prototype.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
CoffeeShop.prototype.generateCustomerPerHour = function() {
  for (var i = 0; i < timeOpen.length; i++) {
    var oneHourOfCustomers = this.randomNum(this.maxCustomer, this.minCustomer);
    this.customerPerHour.push(oneHourOfCustomers);
    this.customerTotal += oneHourOfCustomers;
  }
};
CoffeeShop.prototype.generateCupPerHour = function() {
  for (var i = 0; i < timeOpen.length; i++) {
    var oneHourOfCups = (this.customerPerHour[i] * this.averageCup);
    this.cupPerHour.push(oneHourOfCups);
    this.cupTotal += oneHourOfCups;
  }
};
CoffeeShop.prototype.generatePoundPerHour = function() {
  for (var i = 0; i < timeOpen.length; i++){
    var oneHourOfPounds = (this.customerPerHour[i] * this.averagePound);
    this.poundToGoHour.push(oneHourOfPounds);
    this.poundToGoTotal += oneHourOfPounds;
    var oneHourOfCupPounds = (this.cupPerHour[i] / 16);
    this.poundsForCupsHourly.push(oneHourOfCupPounds);
    this.poundsForCupsTotal += oneHourOfCupPounds;
    var totalPoundsCombined = (this.customerPerHour[i] * this.averagePound) + (this.cupPerHour[i] / 16);
    this.poundOverAllHourly.push(totalPoundsCombined);
    this.poundOverAllTotal += totalPoundsCombined;
  }
};
CoffeeShop.prototype.generateEmployeeNeeded = function () {
  for (var i = 0; i < timeOpen.length; i++)
    if ((this.customerPerHour[i] / 30) >= 1) {
      this.empNeeded[i] = 2;
    } else {
      this.empNeeded[i] = 1;
    }
};
CoffeeShop.prototype.render = function() {
  this.generateCustomerPerHour();
  this.generateCupPerHour();
  this.generatePoundPerHour();
  this.generateEmployeeNeeded();
};


new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

var renderCoffeeShops = function () {
  for (var i = 0; i < coffeeShops.length; i++) {
    coffeeShops[i].render();
  }
};
renderCoffeeShops();

var tableEl = document.getElementById('cfc-data-table');
function buildTableHeader() {
  var trEl = document.createElement('tr');
  for (var i = 0; i < timeOpen.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = timeOpen[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};
buildTableHeader();

function buildTableBody() {
  for (var i = 0; i < coffeeShops.length; i++){
    var trEl = document.createElement('tr');
    trEl.textContent = coffeeShops[i].name;
    for (var a = 0; a < timeOpen.length; a++) {
      var thEl = document.createElement('th');
      thEl.textContent = coffeeShops[i].poundOverAllHourly[a].toFixed(2);
      trEl.appendChild(thEl);
    }
    tableEl.appendChild(trEl);
  }
};
buildTableBody();
