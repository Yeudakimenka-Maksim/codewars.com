/**
 * Created by Максим on 04.02.2015.
 */

function triangleType(a, b, c) {
    var result = triangleType.ACUTE,
        sides = [a, b, c].sort(function (a, b) {
            return a - b
        });

    a = sides[0];
    b = sides[1];
    c = sides[2];

    if (c >= a + b)
        result = triangleType.INVALID;
    else if (c * c === a * a + b * b)
        result = triangleType.RIGHT;
    else if (c * c > a * a + b * b)
        result = triangleType.OBTUSE;

    return result;
}

triangleType.INVALID = 0;
triangleType.ACUTE = 1;
triangleType.RIGHT = 2;
triangleType.OBTUSE = 3;