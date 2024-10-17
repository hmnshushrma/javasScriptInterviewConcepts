const data = [2,3,5,6,8,10]

function binarySearch (start, end, dataArr, target){
    if(start > end){
        return -1 
    } 
   
    let middle = Math.floor((start + end) / 2)
   
    if(target == dataArr[middle]){
        return middle 
    } 

    if(target < dataArr[middle]) {
        return binarySearch( start ,  middle - 1 , dataArr, target)
    }else{
        return binarySearch( middle + 1 , end , dataArr, target)
    }
}

function findTarget(dataArr, target){
    let start = 0 
    let end = dataArr.length - 1
    const result = binarySearch(start, end, data, target )
    return result 
}

console.log(findTarget(data, 7))