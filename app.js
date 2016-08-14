var timeOpen =
              ['6:00am','7:00am','8:00am',
              '9:00am','10:00am','11:00am',
              '12:00pm','1:00pm','2:00pm',
              '3:00pm','4:00pm','5:00pm',
              '6:00pm','7:00pm','8:00pm',];
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
  cupsTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  employeeNeeded: [],
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
      this.cupsTotal += oneHourOfCups;
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
        this.employeeNeeded[i] = 2;
      } else {
        this.employeeNeeded[i] = 1;
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
var pPMEl = document.getElementById('pike-place-market');
function makeDataListPPM() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + pikePlaceMarket.poundOverAllHourly[i].toFixed(2) + ' lbs [' + pikePlaceMarket.customerPerHour[i] + ' customers, ' + pikePlaceMarket.cupPerHour[i].toFixed(2) + ' cups (' + pikePlaceMarket.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + pikePlaceMarket.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    pPMEl.appendChild(dataLiEl);
  }
};
makeDataListPPM();
function makeLocationTotalPPM() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Pike Place Market: ' + pikePlaceMarket.customerTotal;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Pike Place Market: ' + pikePlaceMarket.cupsTotal.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Pike Place Market: ' + pikePlaceMarket.poundToGoTotal.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Pike Place Market: ' + pikePlaceMarket.poundOverAllTotal.toFixed(2);
  pPMEl.appendChild(totalCustomersLiEl);
  pPMEl.appendChild(totalCupsLiEl);
  pPMEl.appendChild(totalPoundsToGoLiEl);
  pPMEl.appendChild(totalPoundsOverAllLiEl);
};
makeLocationTotalPPM();


var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 12,
  maxCustomer: 28,
  averageCup: 3.2,
  averagePound: 0.03,
  customerPerHour : [],
  cupPerHour : [],
  poundsForCupsHourly: [],
  poundToGoHour : [],
  poundOverAllHourly : [],
  customerTotal: 0,
  cupsTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  employeeNeeded: [],
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
      this.cupsTotal += oneHourOfCups;
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
        this.employeeNeeded[i] = 2;
      } else {
        this.employeeNeeded[i] = 1;
      }
  },
  render: function() {
    this.generateCustomerPerHour();
    this.generateCupPerHour();
    this.generatePoundPerHour();
    this.generateEmployeeNeeded();
  },
};
console.log(capitolHill);
capitolHill.render();
var cHEl = document.getElementById('capitol-hill');
function makeDataListCH() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + capitolHill.poundOverAllHourly[i].toFixed(2) + ' lbs [' + capitolHill.customerPerHour[i] + ' customers, ' + capitolHill.cupPerHour[i].toFixed(2) + ' cups (' + capitolHill.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + capitolHill.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    cHEl.appendChild(dataLiEl);
  }
};
makeDataListCH();
function makeLocationTotalCH() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Capitol Hill: ' + capitolHill.customerTotal;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Capitol Hill: ' + capitolHill.cupsTotal.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Capitol Hill: ' + capitolHill.poundToGoTotal.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Capitol Hill: ' + capitolHill.poundOverAllTotal.toFixed(2);
  cHEl.appendChild(totalCustomersLiEl);
  cHEl.appendChild(totalCupsLiEl);
  cHEl.appendChild(totalPoundsToGoLiEl);
  cHEl.appendChild(totalPoundsOverAllLiEl);
};
makeLocationTotalCH();

var seattlePubilcLibrary = {
  name: 'Seattle Pubilc Library',
  minCustomer: 9,
  maxCustomer: 45,
  averageCup: 2.6,
  averagePound: 0.02,
  customerPerHour : [],
  cupPerHour : [],
  poundsForCupsHourly: [],
  poundToGoHour : [],
  poundOverAllHourly : [],
  customerTotal: 0,
  cupsTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  employeeNeeded: [],
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
      this.cupsTotal += oneHourOfCups;
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
        this.employeeNeeded[i] = 2;
      } else {
        this.employeeNeeded[i] = 1;
      }
  },
  render: function() {
    this.generateCustomerPerHour();
    this.generateCupPerHour();
    this.generatePoundPerHour();
    this.generateEmployeeNeeded();
  },
};
console.log(seattlePubilcLibrary);
seattlePubilcLibrary.render();
var sPLEl = document.getElementById('seattle-pubilc-library');
function makeDataListSPL() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + seattlePubilcLibrary.poundOverAllHourly[i].toFixed(2) + ' lbs [' + seattlePubilcLibrary.customerPerHour[i] + ' customers, ' + seattlePubilcLibrary.cupPerHour[i].toFixed(2) + ' cups (' + seattlePubilcLibrary.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + seattlePubilcLibrary.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    sPLEl.appendChild(dataLiEl);
  }
};
makeDataListSPL();
function makeLocationTotalSPL() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Seattle Pubilc Library: ' + seattlePubilcLibrary.customerTotal;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Seattle Pubilc Library: ' + seattlePubilcLibrary.cupsTotal.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Seattle Pubilc Library: ' + seattlePubilcLibrary.poundToGoTotal.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Seattle Pubilc Library: ' + seattlePubilcLibrary.poundOverAllTotal.toFixed(2);
  sPLEl.appendChild(totalCustomersLiEl);
  sPLEl.appendChild(totalCupsLiEl);
  sPLEl.appendChild(totalPoundsToGoLiEl);
  sPLEl.appendChild(totalPoundsOverAllLiEl);
};
makeLocationTotalSPL();

var southLakeUnion = {
  name: 'South Lake Union',
  minCustomer: 5,
  maxCustomer: 18,
  averageCup: 1.3,
  averagePound: 0.04,
  customerPerHour : [],
  cupPerHour : [],
  poundsForCupsHourly: [],
  poundToGoHour : [],
  poundOverAllHourly : [],
  customerTotal: 0,
  cupsTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  employeeNeeded: [],
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
      this.cupsTotal += oneHourOfCups;
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
        this.employeeNeeded[i] = 2;
      } else {
        this.employeeNeeded[i] = 1;
      }
  },
  render: function() {
    this.generateCustomerPerHour();
    this.generateCupPerHour();
    this.generatePoundPerHour();
    this.generateEmployeeNeeded();
  },
};
console.log(southLakeUnion);
southLakeUnion.render();
var sLUEl = document.getElementById('south-lake-union');
function makeDataListSLU() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + southLakeUnion.poundOverAllHourly[i].toFixed(2) + ' lbs [' + southLakeUnion.customerPerHour[i] + ' customers, ' + southLakeUnion.cupPerHour[i].toFixed(2) + ' cups (' + southLakeUnion.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + southLakeUnion.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    sLUEl.appendChild(dataLiEl);
  }
};
makeDataListSLU();
function makeLocationTotalSLU() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at South Lake Union: ' + southLakeUnion.customerTotal;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at South Lake Union: ' + southLakeUnion.cupsTotal.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at South Lake Union: ' + southLakeUnion.poundToGoTotal.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at South Lake Union: ' + southLakeUnion.poundOverAllTotal.toFixed(2);
  sLUEl.appendChild(totalCustomersLiEl);
  sLUEl.appendChild(totalCupsLiEl);
  sLUEl.appendChild(totalPoundsToGoLiEl);
  sLUEl.appendChild(totalPoundsOverAllLiEl);
};
makeLocationTotalSLU();

var seaTacAirPort = {
  name: 'Sea-Tac Airport',
  minCustomer: 28,
  maxCustomer: 44,
  averageCup: 1.1,
  averagePound: 0.41,
  customerPerHour : [],
  cupPerHour : [],
  poundsForCupsHourly: [],
  poundToGoHour : [],
  poundOverAllHourly : [],
  customerTotal: 0,
  cupsTotal : 0,
  poundsForCupsTotal : 0,
  poundToGoTotal : 0,
  poundOverAllTotal : 0,
  employeeNeeded: [],
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
      this.cupsTotal += oneHourOfCups;
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
        this.employeeNeeded[i] = 2;
      } else {
        this.employeeNeeded[i] = 1;
      }
  },
  render: function() {
    this.generateCustomerPerHour();
    this.generateCupPerHour();
    this.generatePoundPerHour();
    this.generateEmployeeNeeded();
  },
};
console.log(seaTacAirPort);
seaTacAirPort.render();
var sTAEl = document.getElementById('seatac-airport');
function makeDataListSTA() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + seaTacAirPort.poundOverAllHourly[i].toFixed(2) + ' lbs [' + seaTacAirPort.customerPerHour[i] + ' customers, ' + seaTacAirPort.cupPerHour[i].toFixed(2) + ' cups (' + seaTacAirPort.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + seaTacAirPort.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    sTAEl.appendChild(dataLiEl);
  }
};
makeDataListSTA();
function makeLocationTotalSTA() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Sea-Tac Airport: ' + seaTacAirPort.customerTotal;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Sea-Tac Airport: ' + seaTacAirPort.cupsTotal.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Sea-Tac Airport: ' + seaTacAirPort.poundToGoTotal.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Sea-Tac Airport: ' + seaTacAirPort.poundOverAllTotal.toFixed(2);
  sTAEl.appendChild(totalCustomersLiEl);
  sTAEl.appendChild(totalCupsLiEl);
  sTAEl.appendChild(totalPoundsToGoLiEl);
  sTAEl.appendChild(totalPoundsOverAllLiEl);
};
makeLocationTotalSTA();
