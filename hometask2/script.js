///////////forEach
let arr1 = [1,2,3,4];
function myForEach(arr,callback){
    for(i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
        return  callback(arr[i],i,arr);
        }
    }
}
let sum=0;
myForEach(arr1,item=>{console.log(sum+=item)});



// ////////////includes
let arr2 = [1,2,3,4];
function myIncludes(arr,callback){
    for(i=0;i<arr.length;i++){
       if(callback(arr[i],i,arr)){
        return  true;
       }
    }
    return false;
}
console.log(myIncludes(arr2,item=>item>2));


// ////////////// join
let arr3 = [1,2,3,4];
function myJoin(arr,str){
    let string="";
    for(i=0;i<arr.length;i++){
       string+=arr[i].toString()+str;
    }
    if(string.substr(string.length-1)==arr[arr.length-1]){
        return string;
    }
    return string.substr(0,string.length-1);
}
console.log(myJoin(arr3,"-"));


// /////////////// lastIndexof
let arr4 = [1,2,5,3,4,5];
function myLastIndexOf(arr,val,from){
    for(let i = arr.length;i!=0;i--){
        if(from){
            arr.length=from;
        }else arr.length
        if(val==arr[i]){
            return i;
        }
    }
}
console.log(myLastIndexOf(arr4,5,3));


// /////// pop
let arr5 = [1,2,3,4,5];
function myPop(arr){
    if(!arr.length){
        return undefined;
    }else {
        let a=arr[arr.length-1]
        arr.length=arr.length-1;
        return a;
    }  
}
myPop(arr5);
console.log(arr5);

// /////// push
let arr6 = [1,2,3,4,5];
function myPush(arr,...val){
    for(let i=0;i<val.length;i++){
     arr[arr.length]=val[i];
    }
    return arr.length; 
}
myPush(arr6,1,2,3);
console.log(arr6);

// //////slice
let arr7 = [1,2,3,4,5];
function mySlice(arr,val1,val2){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(i>=val1 && i<val2){
            // newarr.push(arr[i])
            myPush(newarr,arr[i]); //used my function here 
        }
    }
    return newarr;
}
console.log(mySlice(arr7,1,4));

// /////// shift
let arr8 = [1,2,3,4,5];
function myShift(arr){
    if(!arr.length){
        return undefined;
    }else {
        let a=arr[0];
        arr.splice(arr[arr.length],1);
        return a;
    } 
}
console.log(myShift(arr8));
console.log(arr8);

// /////// unshift
let arr9 = [1,2,3,4,5];
function myUnshift(arr,...val){
    for(let i=0;i<val.length;i++){
        // arr.reverse()
        myReverse(arr);////used my function here
        arr[arr.length]=val[i];
        // arr.reverse()
        myReverse(arr);////used my function here
    }
    return arr.length;
}
console.log(myUnshift(arr9,6,7,8));
console.log(arr9);

// /////reverse
let arr10 = [1,2,3,4,5];
function myReverse(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp ;
    }
    return arr;
}
myReverse(arr10);
console.log(arr10);


// ///splice
let arr11 = [1,2,3,4,5,6,7,8,9];
function mySplice(arr,start,count,...item){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
       if(i>=start && i<=count){
           newarr.push(arr[i]);
           delete arr[i];
            if(!arr[i]){
                arr[i]=item[i-1] ;
            }   
       }  
    }
    return  newarr;
}
console.log(mySplice(arr11,1,3,"hello","hi","how are you"));
console.log(arr11);

