// 1 
function bubbleSort(array) {
    let swaps = 0;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        [array[i], array[i + 1]] = [array[i+1], array[i]]
        swaps++
      }
    }
    return swaps === 0  ? array : bubbleSort(array)
  }
  console.log(bubbleSort(array =  [8, 5, 2, 9, 5, 6, 3]))


  // 2 

  function bubbleSort(array) {
    const len = array.length
    for(let i = 0; i < len; i++){
      for( let j = 0; j < len; j++){
        if(array[j] > array[j + 1]){
          const temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
    return array
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;