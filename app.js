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
    for (var i = 0; i < 15; i++) {
      var oneHourOfCustomers = this.randomNum(this.maxCustomer, this.minCustomer);
      this.customerPerHour.push(oneHourOfCustomers);
    }
  },
  generateCupPerHour : function() {
    for (var i = 0; i < this.customerPerHour.length; i++) {
      this.cupPerHour.push(this.customerPerHour[i] * this.averageCup);
    };
  },
  // generatePoundPerHour : function() {
  //   var poundPerCus = (oneHourOfCustomers * this.averagePound) + (cupPerCus / 16);
  //   for (var i = 0; i < 15; i ++){
  //     this.poundPerHour[i] += poundPerCus;
  //   };
  // },
  generatePoundPerHour : function() {
    for (var i = 0; i < this.customerPerHour.length; i++){
      this.poundPerHour.push((this.customerPerHour[i] * this.averagePound) + (cupPerCus / 16));
    };
  },
};
pikePlaceMarket.generateCustomerPerHour();
pikePlaceMarket.generateCupPerHour();
pikePlaceMarket.generatePoundPerHour();
