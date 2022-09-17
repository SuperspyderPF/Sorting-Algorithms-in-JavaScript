//1

function selectionSort(array) {
    const arr = array.slice()  
    for (let i=0; i <= arr.length-1; i++) {
      
      let smallestIdx = i
  
      for (let j=i; j <= arr.length-1; j++) {
        if (arr[j] < arr[smallestIdx]) { 
          smallestIdx = j
        }
      }
  
      
      if (arr[i] > arr[smallestIdx]) {
        let temp = arr[i]
        arr[i] = arr[smallestIdx]
        arr[smallestIdx] = temp
      }
    }
  
    return arr
  }
  
  
  console.log(selectionSort(array = [8, 5, 2, 9, 5, 6, 3]))

  //2

  function selectionSort(array) {
    const len = array.length
    for(let i = 0; i < len; i ++){
      let idxOfMin = i
      for (let j = i + 1; j < len; j++){
        if(array[j] < array[idxOfMin]) idxOfMin = j
      }
      if(idxOfMin !== i){
        const temp = array[idxOfMin]
        array[idxOfMin] = array[i]
        array[i] = temp
      }
    }
    return array
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  