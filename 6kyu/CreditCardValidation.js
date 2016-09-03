/**
 * Created by Максим on 04.02.2015.
 */

function validate(cardNumber) {
    var digits = cardNumber.toString().split('').map(Number);
    for (var i = digits.length % 2; i < digits.length; i += 2) {
        digits[i] *= 2;
        if (digits[i] > 9)
            digits[i] -= 9;
    }
    var sum = digits.reduce(function (acc, item) {
        return acc + item;
    });
    return sum % 10 == 0;
}