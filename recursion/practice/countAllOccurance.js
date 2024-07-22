// recurCountKey(array, key, index = 0)
// [1, 2, 4, 2, 4, 2, 6]
// key = 2 
// Output --> 3

// itterative approach
function countAll(arr,key){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] === key){
          count++;
       }
    }
    return count
}
// console.log(countAll([1, 2, 4, 2, 4, 2, 6],2));

// recursive approach
function recursiveCountAll(arr, key, index = 0){
   if(index > arr.length-1){
    return 0
   }
   if(arr[index] === key){
     return 1 + recursiveCountAll(arr,key,index+1)
   }else{
    return recursiveCountAll(arr,key,index+1)
   }
}
console.log(recursiveCountAll([1, 2, 4, 2, 4, 2, 6],2));
