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
function makeDataList() {
  for (var i in timeOpen) {
    var dataLiEl = document.createElement('li');
    dataLiEl.textContent = timeOpen[i] + ': ' + pikePlaceMarket.poundOverAllHourly[i].toFixed(2) + ' lbs [' + pikePlaceMarket.customerPerHour[i].toFixed(2) + ' customers, ' + pikePlaceMarket.cupPerHour[i].toFixed(2) + ' cups (' + pikePlaceMarket.poundsForCupsHourly[i].toFixed(2) + ' lbs), ' + pikePlaceMarket.poundToGoHour[i].toFixed(2) + ' lbs to-go]';
    pPMEl.appendChild(dataLiEl);
  }
};
makeDataList();
function makeLocationTotal() {
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
makeLocationTotal();
