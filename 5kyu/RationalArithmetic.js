/**
 * Created by Максим on 02.02.2015.
 */

var gcd = function (a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
};

function Rational(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator || 1;
    this.simplify();
}

Rational.prototype = {

    simplify: function () {
        var divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
    },

    toDecimal: function () {
        return this.numerator / this.denominator;
    },

    lessThan: function (b) {
        return this.toDecimal() < b.toDecimal();
    },

    greaterThan: function (b) {
        return this.toDecimal() > b.toDecimal();
    },

    lessThanOrEquals: function (b) {
        return this.toDecimal() <= b.toDecimal();
    },

    greaterThanOrEquals: function (b) {
        return this.toDecimal() >= b.toDecimal();
    },

    negate: function () {
        return new Rational(-this.numerator, this.denominator);
    },

    reciprocal: function () {
        return new Rational(this.denominator, this.numerator);
    },

    add: function (b) {
        var numerator = this.numerator * b.denominator + b.numerator * this.denominator;
        var denominator = this.denominator * b.denominator;
        return new Rational(numerator, denominator);
    },

    sub: function (b) {
        return this.add(b.negate());
    },

    mul: function (b) {
        var numerator = this.numerator * b.numerator;
        var denominator = this.denominator * b.denominator;
        return new Rational(numerator, denominator);
    },

    div: function (b) {
        return this.mul(b.reciprocal());
    },

    equals: function (b) {
        return this.toString() == b.toString();
    },

    toString: function () {
        return this.numerator + "/" + this.denominator;
    }
};