/**
 * Created by Максим on 30.01.2015.
 */

var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo) {
    stringOne = stringOne || 'Fizz';
    stringTwo = stringTwo || 'Buzz';
    numOne = numOne || 3;
    numTwo = numTwo || 5;

    var result = [];
    for (var i = 1; i <= 100; i++)
        if (i % numOne == 0 && i % numTwo == 0)
            result.push(stringOne + stringTwo);
        else if (i % numOne == 0)
            result.push(stringOne);
        else if (i % numTwo == 0)
            result.push(stringTwo);
        else
            result.push(i);
    return result;
}