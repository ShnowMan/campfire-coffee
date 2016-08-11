var pikePlaceMarket = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  customerPerHour : [],
  cupPerHour : [],
  poundPerHour : [],
  cupTotal : 0,
  poundTotal : 0,
  randomNum : function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  generateCustomerPerHour : function() {
    var oneHourOfCustomers = this.randomNum(this.maxCustomer, this.minCustomer);
    return oneHourOfCustomers;
    for (var i = 0; i < 15; i++) {
      this.customerPerHour[i] += oneHourOfCustomers;
    }
  },
  generateCupPerHour : function() {
    var cupPerCus = (oneHourOfCustomers * this.averageCup);
    for (var i = 0; i < 15; i ++){
      this.cupPerHour[i] += cupPerCus;
    };
  },
  generatePoundPerHour : function() {
    var poundPerCus = (oneHourOfCustomers * this.averagePound) + (cupPerCus / 16);
    for (var i = 0; i < 15; i ++){
      this.poundPerHour[i] += poundPerCus;
    };
  },

};
pikePlaceMarket.generateCustomerPerHour();
pikePlaceMarket.generateCupPerHour();
pikePlaceMarket.generatePoundPerHour();
