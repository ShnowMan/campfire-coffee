var timeOpen =
              ['6am','7am','8am',
              '9am','10am','11am',
              '12pm','1pm','2pm',
              '3pm','4pm','5pm',
              '6pm','7pm','8pm',];
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
