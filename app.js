var pikePlaceMarket = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34
};
pikePlaceMarket.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
pikePlaceMarket.getRandomCus = function() {
  var tempRandom = this.randomNum(this.minCustomer, this.maxCustomer);
  return tempRandom;
};
