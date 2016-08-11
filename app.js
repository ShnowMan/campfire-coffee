var time =
  ['6:00','7:00','8:00','9:00',
  '10:00','11:00','12:00','13:00',
  '14:00','15:00','16:00','17:00',
  '18:00','19:00','20:00'];
var pikePlaceMarket = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  randomNum : function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getRandomCus : function() {
    var tempRandomPPM = this.randomNum(this.minCustomer, this.maxCustomer);
    return tempRandomPPM;
  },
  calcCupPerCus : function() {
    var cupPerCusPPM = (tempRandomPPM * this.averageCup);
    return cupPerCusPPM;
  },
  calcPoundPerCus : function() {
    var poundPerCusPPM = (tempRandomPPM * this.averagePound) + (cupPerCus / 16);
    return poundPerCusPPM;
  },
};
