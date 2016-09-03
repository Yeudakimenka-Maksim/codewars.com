/**
 * Created by Максим on 30.01.2015.
 */

function combineArrays(arr1, arr2) {
    return (arr1 || []).concat(arr2 || []);
}
var appendArrays = combineArrays;