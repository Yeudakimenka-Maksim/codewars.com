/**
 * Created by Максим on 30.01.2015.
 */

function palindrome(string) {
    string = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
    for (var i = 0, j = string.length - 1; i <= j; i++, j--)
        if (string[i] != string[j])
            return false;
    return true;
}