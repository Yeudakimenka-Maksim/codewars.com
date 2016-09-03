/**
 * Created by Максим on 04.02.2015.
 */

function area_of_the_shape(f) {
    var EPSILON = 0.0001;
    var k = 0, n = 1 / (EPSILON * EPSILON);
    for (var x = 0.0; x <= 1.0; x += EPSILON)
        for (var y = 0.0; y <= 1.0; y += EPSILON)
            if (f(x, y))
                k++;
    return k / n;
}

function circular_area(x, y) {
    return Math.pow(x - 0.5, 2.0) + Math.pow(y - 0.5, 2.0) <= 0.25;

}

function full_shape(x, y) {
    return (0 < x && x < 1 && 0 < y && y < 1);
}

var EPSILON = 0.01;

var a = Math.abs(area_of_the_shape(circular_area) - 0.25 * Math.PI) <= EPSILON;
alert(a);

var b = Math.abs(area_of_the_shape(full_shape) - 1) <= EPSILON;
alert(b);