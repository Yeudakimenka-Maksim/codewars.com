/**
 * Created by Максим on 30.01.2015.
 */

function range() {
    var start = 0, end, step = 1;
    if (arguments.length == 1) end = arguments[0];
    else {
        start = arguments[0];
        end = arguments[1];
        if (arguments.length == 3) step = arguments[2];
    }
    var size = (step == 0 ? end - start : (end - start) / step);
    var a = [];
    for (var i = 0, x = start; i < size; i++, x += step)
        a.push(x);
    return a;
}