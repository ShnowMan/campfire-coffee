var pikePlaceMarket = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  customerPerHour : [],
  cupPerHour : [],
  poundPerHour : [],
  customerTotal: 0,
  cupTotal : 0,
  poundTotal : 0,
  randomNum : function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  generateCustomerPerHour : function() {
    for (var i = 0; i < 15; i++) {
      var oneHourOfCustomers = this.randomNum(this.maxCustomer, this.minCustomer);
      this.customerPerHour.push(oneHourOfCustomers);
      this.customerTotal += oneHourOfCustomers;
    }
  },
  generateCupPerHour : function() {
    for (var i = 0; i < this.customerPerHour.length; i++) {
      var oneHourOfCups = (this.customerPerHour[i] * this.averageCup);
      this.cupPerHour.push(this.customerPerHour[i] * this.averageCup);
      this.cupTotal += oneHourOfCups;
    };
  },
  generatePoundPerHour : function() {
    for (var i = 0; i < this.customerPerHour.length; i++){
      var oneHourOfPounds = (this.customerPerHour[i] * this.averagePound) + (this.cupPerHour[i] / 16);
      this.poundPerHour.push((this.customerPerHour[i] * this.averagePound) + (this.cupPerHour[i] / 16));
      this.poundTotal += oneHourOfPounds;
    };
  },
};
pikePlaceMarket.generateCustomerPerHour();
pikePlaceMarket.generateCupPerHour();
pikePlaceMarket.generatePoundPerHour();
console.log(pikePlaceMarket);
