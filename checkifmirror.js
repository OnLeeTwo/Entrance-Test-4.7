function checkIfMirror(matrix){
    for (let arrindex = 0; arrindex < matrix.length; arrindex++){
        for (let numindex = 0; numindex < matrix[arrindex].length; numindex++){
            if (matrix[arrindex][numindex] !== matrix[arrindex][matrix[arrindex].length-1-numindex]){
                return false
            }
        }
    }
    return true
}
console.log(checkIfMirror([[1, 5, 9, 5, 1],
                            [2, 2],
                            [3,-9,-9, 3]])); // true 
console.log(checkIfMirror([[10, 5, 6, 5, 10],
                            [2, 2],
                            [3, 19, 19, 7]])); // false   
console.log(checkIfMirror([[10, 5, 16, 15, 100, 15, 16, 5, 10],
                            [2, 20, 20, 2],
                            [3, 19, -19, -177, -19, 19, 3],
                            [-9,-9,-9,-9,-9,-9,-9]])); // true 