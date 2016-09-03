/**
 * Created by Максим on 30.01.2015.
 */

function fib(n) {
    var a = 0, b = 1;
    for (var i = 0; i < n; i++) {
        var t = a;
        a += b;
        b = t;
    }
    return b;
}