/**
 * Created by Максим on 30.01.2015.
 */

function Jar() {
    this.amounts = {};
    this.total = 0;
}

Jar.prototype.add = function (amount, type) {
    if (this.amounts[type] == null)
        this.amounts[type] = 0;
    this.amounts[type] += amount;
    this.total += amount;
};

Jar.prototype.pourOut = function (amount) {
    for (var type in this.amounts)
        this.amounts[type] -= amount * this.getConcentration(type);
    this.total -= amount;
};

Jar.prototype.getTotalAmount = function () {
    return this.total;
};

Jar.prototype.getConcentration = function (type) {
    var concentration = this.amounts[type] / this.total;
    return concentration > 0 ? concentration : 0;
}