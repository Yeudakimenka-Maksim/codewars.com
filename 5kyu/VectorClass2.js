/**
 * Created by Максим on 02.02.2015.
 */

var Vector = function (components) {
    this.items = components;
    this.length = components.length;
};

Vector.prototype = {
    do: function (action, vector) {
        if (vector.length !== this.length) {
            throw 'Different Length!';
        }
        return new Vector(this.items.map(function (v, k) {
            return eval(v + action + vector.items[k])
        }));
    },

    add: function (v) {
        return this.do('+', v);
    },

    subtract: function (v) {
        return this.do('-', v);
    },

    sum: function (v) {
        return eval(v.items.join('+'));
    },

    dot: function (v) {
        return this.sum(this.do('*', v));
    },

    norm: function () {
        return Math.sqrt(this.dot(this));
    },

    toString: function () {
        return '(' + this.items + ')';
    },

    equals: function (v) {
        return this.toString() == v.toString();
    }
};