// 1 

function insertionSort(array)  {
  const arr = Array.from(array); 

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
};

console.log(insertionSort(arr = [8, 5, 2, 9, 5, 6, 3]))

//2 
function insertionSort(array) {
  for(let i = 1; i < array.length; i++){
    let curr = array[i]
    let j = i - 1
    while(j >= 0 && array[j] > curr){
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = curr
  }
  
  return array
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
