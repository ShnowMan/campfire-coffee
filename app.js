var timeOpen =
['6:00am','7:00am','8:00am',
'9:00am','10:00am','11:00am',
'12:00pm','1:00pm','2:00pm',
'3:00pm','4:00pm','5:00pm',
'6:00pm','7:00pm','8:00pm',];

var coffeeShopsArray = [];
console.log(coffeeShopsArray);

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
  this.empNeededHourly = [];
  this.empNeededTotal = 0;
  coffeeShopsArray.push(this);
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
  for (var i = 0; i < timeOpen.length; i++){
    if ((this.customerPerHour[i] / 30) >= 1) {
      this.empNeededHourly[i] = 2;
    } else {
      this.empNeededHourly[i] = 1;
    }
    var temp = (this.empNeededTotal + this.empNeededHourly[i]);
    this.empNeededTotal = parseFloat(temp);
  }
};
CoffeeShop.prototype.render = function() {
  this.generateCustomerPerHour();
  this.generateCupPerHour();
  this.generatePoundPerHour();
  this.generateEmployeeNeeded();
};

var pikePlaceMarket = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
var seattlePublicLibrary = new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
var southLakeUnion = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
var seaTacAirport = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

var renderCoffeeShops = function () {
  for (var i = 0; i < coffeeShopsArray.length; i++) {
    coffeeShopsArray[i].render();
  }
};
renderCoffeeShops();

var poundsOverAll = 0;
var poundsTotalHourly = [];
function addPoundHoursTogeather() {
  for (var i = 0; i < timeOpen.length; i++) {
    var temp = (pikePlaceMarket.poundOverAllHourly[i] + capitolHill.poundOverAllHourly[i] + seattlePublicLibrary.poundOverAllHourly[i] + southLakeUnion.poundOverAllHourly[i] + seaTacAirport.poundOverAllHourly[i]);
    poundsTotalHourly.push(temp);
    poundsOverAll += temp;
  }
};

var employeesOverAll = 0;
var employeesTotalHourly = [];
function addEmployeeHoursTogeather() {
  for (var i = 0; i < timeOpen.length; i++) {
    var temp = (pikePlaceMarket.empNeededHourly[i] + capitolHill.empNeededHourly[i] + seattlePublicLibrary.empNeededHourly[i] + southLakeUnion.empNeededHourly[i] + seaTacAirport.empNeededHourly[i]);
    employeesTotalHourly.push(temp);
    employeesOverAll += temp;
  }
};

var dataTableEl = document.getElementById('cfc-data-table');
function buildDataTableHeader() {
  var trEl = document.createElement('tr');
  var blankThEl = document.createElement('th');
  blankThEl.textContent = ' ';
  trEl.appendChild(blankThEl);
  var dailyLocationTotalThEl = document.createElement('th');
  dailyLocationTotalThEl.textContent = 'Daily Location Total';
  trEl.appendChild(dailyLocationTotalThEl);
  for (var i = 0; i < timeOpen.length; i++) {
    var hoursThEl = document.createElement('th');
    hoursThEl.textContent = timeOpen[i];
    trEl.appendChild(hoursThEl);
  }
  dataTableEl.appendChild(trEl);
};

function buildDataTableBody() {
  var hourlyTotalsTrEl = document.createElement('tr');
  hourlyTotalsTrEl.textContent = 'Totals';
  var grandTotalThEl = document.createElement('th');
  grandTotalThEl.textContent = poundsOverAll.toFixed(2);
  hourlyTotalsTrEl.appendChild(grandTotalThEl);
  for (var a = 0; a < coffeeShopsArray.length; a++){
    var hourlyTrEl = document.createElement('tr');
    hourlyTrEl.textContent = coffeeShopsArray[a].name;
    var totalThEl = document.createElement('th');
    totalThEl.textContent = coffeeShopsArray[a].poundOverAllTotal.toFixed(2);
    hourlyTrEl.appendChild(totalThEl);
    for (var b = 0; b < timeOpen.length; b++) {
      var hourlyThEl = document.createElement('th');
      hourlyThEl.textContent = coffeeShopsArray[a].poundOverAllHourly[b].toFixed(2);
      hourlyTrEl.appendChild(hourlyThEl);
    }
    dataTableEl.appendChild(hourlyTrEl);
    dataTableEl.appendChild(hourlyTotalsTrEl);
  }
  for (var c = 0; c < timeOpen.length; c++) {
    var hourlyTotalsThEl = document.createElement('th');
    hourlyTotalsThEl.textContent = poundsTotalHourly[c].toFixed(2);
    hourlyTotalsTrEl.appendChild(hourlyTotalsThEl);
  }
};

var employeeTableEl = document.getElementById('cfc-employee-table');
function buildEmployeeTableHeader() {
  var trEl = document.createElement('tr');
  var blankThEl = document.createElement('th');
  blankThEl.textContent = ' ';
  trEl.appendChild(blankThEl);
  var dailyLocationTotalThEl = document.createElement('th');
  dailyLocationTotalThEl.textContent = 'Total';
  trEl.appendChild(dailyLocationTotalThEl);
  for (var i = 0; i < timeOpen.length; i++) {
    var hoursThEl = document.createElement('th');
    hoursThEl.textContent = timeOpen[i];
    trEl.appendChild(hoursThEl);
  }
  employeeTableEl.appendChild(trEl);
};

function buildEmployeeTableBody() {
  var hourlyTotalsTrEl = document.createElement('tr');
  hourlyTotalsTrEl.textContent = 'Totals';
  var grandTotalThEl = document.createElement('th');
  grandTotalThEl.textContent = employeesOverAll;
  hourlyTotalsTrEl.appendChild(grandTotalThEl);
  for (var a = 0; a < coffeeShopsArray.length; a++){
    var hourlyTrEl = document.createElement('tr');
    hourlyTrEl.textContent = coffeeShopsArray[a].name;
    var totalThEl = document.createElement('th');
    totalThEl.textContent = coffeeShopsArray[a].empNeededTotal;
    hourlyTrEl.appendChild(totalThEl);
    for (var b = 0; b < timeOpen.length; b++) {
      var hourlyThEl = document.createElement('th');
      hourlyThEl.textContent = coffeeShopsArray[a].empNeededHourly[b];
      hourlyTrEl.appendChild(hourlyThEl);
    }
    employeeTableEl.appendChild(hourlyTrEl);
    employeeTableEl.appendChild(hourlyTotalsTrEl);
  }
  for (var c = 0; c < timeOpen.length; c++) {
    var hourlyTotalsThEl = document.createElement('th');
    hourlyTotalsThEl.textContent = employeesTotalHourly[c];
    hourlyTotalsTrEl.appendChild(hourlyTotalsThEl);
  }
};

addPoundHoursTogeather();
addEmployeeHoursTogeather();
buildDataTableHeader();
buildDataTableBody();
buildEmployeeTableHeader();
buildEmployeeTableBody();
