const heapify = (arr, length, i) => {
    let largest = i
    const left = i * 2 + 1
    const right = left + 1
  
    if (left < length && arr[left] > arr[largest]) {
      largest = left
    }
  
    if (right < length && arr[right] > arr[largest]) {
      largest = right
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, length, largest)
    }
  
    return arr
  }
  function heapSort(array) {
    let length = array.length
    let i = Math.floor(length / 2 - 1)
    let k = length - 1
    while( i >= 0){
      heapify(array, length, i)
      i--
    }
    while( k >= 0){
      [array[0], array[k]] = [array[k], array[0]]
      heapify(array, k, 0)
      k--
    }
    return array
  }
  
  // Do not edit the line below.
  exports.heapSort = heapSort;

  //time O(log(n)) space O(log(n))