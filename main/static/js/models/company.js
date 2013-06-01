//initializes app
var app = app || {};

app.Company = Backbone.Model.extend({
  url: 'http://127.0.0.1:8000/api/v1/contest/2/?format=json',
  parse: function(response) {
    console.log(response)
    var results = {};
    results['task'] = response['task'];
    results['position'] = response['position'];
    results['freelanceFee'] = response['price_money'];
    results['salary'] = response['hire_salary'];
    results['title'] = response['title'];

    return results;
  },

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