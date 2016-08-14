var timeOpen =
              ['6am','7am','8am',
              '9am','10am','11am',
              '12pm','1pm','2pm',
              '3pm','4pm','5pm',
              '6pm','7pm','8pm',];
console.log(timeOpen);
/*
var pikePlaceMarket = {
  name: 'Pike Place Market',
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  customerPerHour : [],
  cupPerHour : [],
  poundsForCupsHourly: [],
  poundToGoHour : [],
  poundOverAllHourly : [],
  customerTotal: 0,
  cupTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  empNeeded: [],
  randomNum : function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  generateCustomerPerHour : function() {
    for (var i = 0; i < timeOpen.length; i++) {
      var oneHourOfCustomers = this.randomNum(this.maxCustomer, this.minCustomer);
      this.customerPerHour.push(oneHourOfCustomers);
      this.customerTotal += oneHourOfCustomers;
    }
  },
  generateCupPerHour : function() {
    for (var i = 0; i < timeOpen.length; i++) {
      var oneHourOfCups = parseFloat((this.customerPerHour[i] * this.averageCup).toFixed(2));
      this.cupPerHour.push(oneHourOfCups);
      this.cupTotal += oneHourOfCups;
    };
  },
  generatePoundPerHour : function() {
    for (var i = 0; i < timeOpen.length; i++){
      var oneHourOfPounds = parseFloat((this.customerPerHour[i] * this.averagePound).toFixed(2));
      this.poundToGoHour.push(oneHourOfPounds);
      this.poundToGoTotal += oneHourOfPounds;
      var oneHourOfCupPounds = parseFloat((this.cupPerHour[i] / 16).toFixed(2));
      this.poundsForCupsHourly.push(oneHourOfCupPounds);
      this.poundsForCupsTotal += oneHourOfCupPounds;
      var totalPoundsCombined = parseFloat((this.customerPerHour[i] * this.averagePound).toFixed(2)) + parseFloat((this.cupPerHour[i] / 16).toFixed(2));
      this.poundOverAllHourly.push(totalPoundsCombined);
      this.poundOverAllTotal += totalPoundsCombined;
    };
  },
  generateEmployeeNeeded : function () {
    for (var i = 0; i < timeOpen.length; i++)
      if ((this.customerPerHour[i] / 30) >= 1) {
        this.empNeeded[i] = 2;
      } else {
        this.empNeeded[i] = 1;
      }
  },
  render: function() {
    this.generateCustomerPerHour();
    this.generateCupPerHour();
    this.generatePoundPerHour();
    this.generateEmployeeNeeded();
  },
};
console.log(pikePlaceMarket);
pikePlaceMarket.render();
*/

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
console.log(CoffeeShop);

new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);
