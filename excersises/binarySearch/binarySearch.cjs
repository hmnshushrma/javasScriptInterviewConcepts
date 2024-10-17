// iterative 



const data = [2,5,6,10,13 , 26 , 27, 78, 101, 291 , 399]

function binarySearch(arr, searchTarget){
    let start = 0 // start index 
    let end = arr.length - 1 // end index 
    let resultPosition = undefined 
    let searchedItem = undefined 

     while (start <= end ) { // 4 < = 
        let middlePoint = Math.floor((start + end ) / 2)
        console.log('middle point :' + middlePoint )
        // target if equal middle index 

        if(arr[middlePoint] == searchTarget){ // mid - 26 | 10 
            resultPosition = middlePoint
            searchedItem = arr[middlePoint]
            break
        }else if(searchTarget < arr[middlePoint]){ // tar - 10 < 26 true  mid 4 
            end = middlePoint - 1
            console.log('end index :' + end )
        } else {
            start = middlePoint + 1
            console.log('start index :' + start )
        }
     }
     return { "index" : resultPosition, "value" : searchedItem }
}


console.log(binarySearch(data, 10))
