let unsortedArr = [10, 7, 22, 32, 42]
let swapped
function bubbleSort(arr){
    swapped = false
    let end = arr.length - 1
    for(let i = 0; i < end; i++){
        if(arr[i] > arr[i + 1]){
            swapped = true
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        } 
    }
    end --
}
do {
    bubbleSort(unsortedArr)
    
}while (swapped)

console.log(unsortedArr)