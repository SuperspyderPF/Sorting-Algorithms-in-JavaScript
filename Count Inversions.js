//Write a JavaScript program to find the number of inversions of a given array of integers (algo expert)
//O(log(n)) time O(log(n)) space 

function countInversions(array) {
    var countInversionsFunction = 0;
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1; j < array.length; j++){
        if(array[i] > array[j]){
          countInversionsFunction++
        }
      }
    }
    
    
    return countInversionsFunction
  }
  
  // Do not edit the line below.
  exports.countInversions = countInversions;