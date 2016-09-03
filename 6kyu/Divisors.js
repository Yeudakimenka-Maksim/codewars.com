/**
 * Created by Максим on 30.01.2015.
 */

function divisors(integer) {
    var result = [];
    for (var i = 2; i <= integer / 2; i++)
        if (integer % i == 0)
            result.push(i);
    return result.length ? result : integer + " is prime";
}