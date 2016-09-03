/**
 * Created by Максим on 03.02.2015.
 */

function prime(num) {
    var primes = [];
    for (var i = 2; i <= num; i++)
        if (isPrime(i))
            primes.push(i);
    return primes;
}

function isPrime(value) {
    if (value % 2 == 0)
        return value == 2;
    for (var i = 3; i <= Math.sqrt(value); i += 2)
        if (value % i == 0)
            return false;
    return true;
}