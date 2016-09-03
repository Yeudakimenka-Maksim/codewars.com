/**
 * Created by Максим on 02.02.2015.
 */

var Vector = function (components) {
    this.innerArray = components;
};

Vector.prototype.negate = function () {
    var result = new Vector([]);
    for (var i = 0; i < this.innerArray.length; i++)
        result.innerArray.push(-this.innerArray[i]);
    return result;
};

Vector.prototype.add = function (vector) {
    if (this.innerArray.length != vector.innerArray.length)
        throw 'Lengths mismatch';
    var result = new Vector([]);
    for (var i = 0; i < this.innerArray.length; i++)
        result.innerArray.push(this.innerArray[i] + vector.innerArray[i]);
    return result;
};

Vector.prototype.subtract = function (vector) {
    return this.add(vector.negate());
};

Vector.prototype.dot = function (vector) {
    if (this.innerArray.length != vector.innerArray.length)
        throw 'Lengths mismatch';
    var result = 0;
    for (var i = 0; i < this.innerArray.length; i++)
        result += this.innerArray[i] * vector.innerArray[i];
    return result;
};

Vector.prototype.norm = function () {
    return Math.sqrt(this.dot(this));
};

Vector.prototype.equals = function (vector) {
    return this.toString() == vector.toString();
};

Vector.prototype.toString = function () {
    return '(' + this.innerArray + ')';
};