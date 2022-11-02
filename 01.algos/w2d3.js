/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3], //                                
    [4, 5, 6], //                               
    [9, 8, 9], //                                 
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/


// function diagonalDifference(sqrMatrix) { 
//     var left = 0 ;
//     var right = 0;
//     // Firstly need to traverse the arrays
//     for(i = 0 ; i < sqrMatrix.length ; i++){
//         left += sqrMatrix[i][i];
//         right += sqrMatrix[i][sqrMatrix.length-1-i];
//         console.log(`Right :  ${sqrMatrix[i][sqrMatrix.length-1-i]}`);
//         console.log(`Left: ${sqrMatrix[i][i]}`)
//     }
    
//     console.log(left, right)
//     return Math.abs(left - right)
//     // Then get the some of the right diagnol and store the value in temp
//     // Get Sum of the Left Diagnol, then store the value in temp
//     // Subtract both values from eachother 
//     // return the value from the difference


// }







function diagonalDifference(sqrMatrix) { 
    var left = 0 ;
    var right = 0;
    // Firstly need to traverse the arrays
    for(i = 0 ; i < sqrMatrix.length ; i++){
        left += sqrMatrix[i][i];
        // console.log(sqrMatrix[i][i]);
    }
    let count = sqrMatrix.length-1;
    for(j = 0; j < sqrMatrix.length;j++){
        console.log(sqrMatrix[j][count]);
        right += sqrMatrix[j][count]
        count--
    }
    
    console.log(left, right)
    return Math.abs(left - right)
    // Then get the some of the right diagnol and store the value in temp
    // Get Sum of the Left Diagnol, then store the value in temp
    // Subtract both values from eachother 
    // return the value from the difference


}


console.log(diagonalDifference(squareMatrix1));
// console.log(diagonalDifference(squareMatrix2));