/**
 * Created by Максим on 30.01.2015.
 */

function zeros(n) {
    for (var i = 1, count = 0; i <= Math.log(n) / Math.log(5); i++)
        count += Math.floor(n / Math.pow(5, i));
    return count;
}