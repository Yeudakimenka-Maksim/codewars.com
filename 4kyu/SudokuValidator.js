/**
 * Created by Максим on 07.02.2015.
 */

var Sudoku = function (data) {
    this.field = data;
    this.size = undefined;
};

Sudoku.prototype = {
    isValid: function () {
        return this.checkSizes() && this.checkValues()
            && this.checkRows() && this.checkColumns() && this.checkSquares();
    },

    checkSizes: function () {
        var size = this.field.length;
        if (size == 0 || Math.pow(Math.floor(Math.sqrt(size)), 2) != size)
            return false;
        for (var i = 0; i < size; i++)
            if (this.field[i].length != size)
                return false;
        this.size = size;
        return true;
    },

    checkValues: function () {
        for (var i = 0; i < this.size; i++)
            for (var j = 0; j < this.size; j++)
                if (this.field[i][j] <= 0 || this.field[i][j] > this.size)
                    return false;
        return true;
    },

    checkRows: function () {
        for (var i = 0; i < this.size; i++) {
            var row = [];
            for (var j = 0; j < this.size; j++)
                row.push(this.field[i][j]);
            row.sort();
            for (j = 0; j < this.size; j++)
                if (row[j] != j + 1)
                    return false;
        }
        return true;
    },

    checkColumns: function () {
        for (var j = 0; j < this.size; j++) {
            var column = [];
            for (var i = 0; i < this.size; i++)
                column.push(this.field[i][j]);
            column.sort();
            for (i = 0; i < this.size; i++)
                if (column[i] != i + 1)
                    return false;
        }
        return true;
    },

    checkSquares: function () {


        return true;
    }
};


var goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

var a = goodSudoku1.isValid() == true;