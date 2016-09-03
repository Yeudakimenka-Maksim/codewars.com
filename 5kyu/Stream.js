/**
 * Created by Максим on 03.02.2015.
 */

var Stream = function (start, output, stepping) {
    this.start = start;
    this.output = output;
    this.stepping = stepping;
};

Stream.prototype = {
    head: function () {
        return this.output(this.start);
    },

    tail: function () {
        return new Stream(this.stepping(this.start), this.output, this.stepping);
    }
};