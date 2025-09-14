const numbers = [1, 2, 3];
numbers.forEach(function (value, index, arr) {
    console.log(value, index, arr);
});

/*
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]
*/

// or

const num2 = [4, 5, 6];
num2.forEach((value, index, arr) => console.log(value, index, arr))

/*
4 0 [ 4, 5, 6 ]
5 1 [ 4, 5, 6 ]
6 2 [ 4, 5, 6 ]
*/