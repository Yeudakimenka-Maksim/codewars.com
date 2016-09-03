/**
 * Created by Максим on 30.01.2015.
 */

function calculateHypotenuse(a, b) {
    if (typeof a != "number" || typeof b != "number" || isNaN(a) || isNaN(b) || a <= 0 || b <= 0)
        throw 'error';
    return Math.sqrt(a * a + b * b).toFixed(3);
}