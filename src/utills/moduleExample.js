const merge = (leftArray, rightArray) => {
    let result = [];
    let leftIndex= 0;
    let rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if(leftArray[leftIndex] <= rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}
const mergeSort = (arr) => {
    if(arr.length <=1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length /2);
    const leftArray = arr.slice(0, midIndex);
    const rightArray= arr.slice(midIndex, arr.length);
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
module.exports = {
    mergeSort
}