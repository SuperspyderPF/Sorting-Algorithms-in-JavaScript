function threeNumberSort(array, order) {
    return array.sort((a,b) => order.indexOf(a) - order.indexOf(b))
  }
  
  // Do not edit the line below.
  exports.threeNumberSort = threeNumberSort;
  