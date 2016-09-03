/**
 * Created by Максим on 03.02.2015.
 */

function meters(x) {
    var prefixes = ['m', 'km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym'];
    var count = 0;
    while (x >= 1000) {
        x /= 1000;
        count++;
    }
    return x + prefixes[count];
}