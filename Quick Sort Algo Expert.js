function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  };
  //time O(log(n)) space O(n)
  
  // Do not edit the line below.
  exports.quickSort = quickSort;
  