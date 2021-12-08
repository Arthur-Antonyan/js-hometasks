/////////////////////////find
let arr1 = [1,2,3,4,500]
function find(arr,callback){
   for(let item of arr){
       if (callback(arr[item])){
           return arr[item]
       }
   }
}

let check1 = find(arr1,item=>item>3)
console.log(check1)


///////// findIndex

let arr2 = [1,2,3,4,500]
function findIndex(arr,callback){
   for(let i = 0;i<arr.length;i++){
       if (callback(arr[i])){
           return i
       }
   }return -1
}

let check2 = findIndex(arr2,item=>item===800)
console.log(check2)

/////////////////////some

let arr3 = [1,2,3,4,500]
function some(arr,callback){
   for(let i = 0;i<arr.length;i++){
       if (callback(arr[i])){
           return true
       }
   }return false
}

let check3 = some(arr3,item=>item%2===0)
console.log(check3)


/////////////////////every

let arr4 = [4,5,6,7,8]
function every(arr,callback){
   for(let i = 0;i<arr.length;i++){
       if (!callback(arr[i])){

        return false
       }
     
   } return true 
}

let check4 = every(arr4,item=>item>3)
console.log(check4)

