let arr1 = [1,2,3,4,500]
function find(arr,func){
   for(let item of arr){
       if (func(item)==arr[item]){
           return func(item)
       }
   }
}

let check1 = find(arr1,()=>4)
console.log(check1)


/////////// findIndex

let arr2 = [1,2,3,4,500]
function findIndex(arr,func){
   for(let i = 0;i<arr.length;i++){
       if (func(i)==arr[i]){
           return i
       }
   }
}

let check2 = findIndex(arr2,()=>2)
console.log(check2)

/////////////////////some

let arr3 = [1,2,3,4,500]
function some(arr,func){
   for(let i = 0;i<arr.length;i++){
       if (func(i)==arr[i]){
           return true
       }
   }return false
}

let check3 = some(arr3,()=>3)
console.log(check3)


/////////////////////every

let arr4 = [3,3,3,3,3,5]
function every(arr,func){
   for(let i = 0;i<arr.length;i++){
       if (func(i)!=arr[i]){

        return false
       }
     
   } return true 
}

let check4 = every(arr4,()=>3)
console.log(check4)
