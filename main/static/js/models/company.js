//initializes app
var app = app || {};

app.Company = Backbone.Model.extend({

  calculateBill: function(isHired) {
    var billStatement = '', totalBill;

    //calculate how much money is owed to us
    //assume we take 10% of freelanceFee, and 1 month salary (if hired)
    totalBill = accounting.formatMoney(this.get('freelanceFee') * 0.1 + isHired * this.get('salary'))

    this.set('totalBill', totalBill);

    billStatement = "Total Bill: " + this.get('totalBill') + "</br>";
    
    if(isHired) {
      billStatement += "One month salary: " + accounting.formatMoney(this.get('salary') + "</br>");
    }

    billStatement += "</br>10% of freelance fee: " + accounting.formatMoney(this.get('freelanceFee') * 0.1); 
    this.set('totalBillStatement', billStatement);
  }
});