/**
 * Created by Максим on 04.02.2015.
 */

var result = 0;

function determinant(matrix) {
    if (matrix.length == 1)
        return matrix[0][0];
    for (var i = 0; i < matrix.length; i++) {
        result += Math.pow(-1, i) * minor(matrix, 0, i);
    }
}

function minor(matrix, i, j) {
    var result = [];
    for (var k = 0; k < matrix.length; k++) {
        var inner = [];
        if (k == i) continue;
        for (var l = 0; l < matrix.length; l++) {
            if (l == j) continue;
            inner.push(matrix[k][l]);
        }
        result.push(inner);
    }
    return result;
}

var matrix = [[1]];
determinant(matrix);

matrix = [[1, 2], [3, 4]];
determinant(matrix);

matrix = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];
determinant(matrix);

var m = minor(matrix, 0, 0);
alert(m);

m = minor(matrix, 1, 1);
alert(m);

m = minor(matrix, 2, 2);
alert(m);