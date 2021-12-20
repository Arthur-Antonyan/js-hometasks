
function check(x){
if(parseInt(x)){
    let z=parseInt(x)
    let count=""
    while(x>0){
        count+=x%10
        x=Math.floor(x/10)
    }
    if(Number(count)==z){
        return (`Palindrome,reverse value is <strong style="color:red">${Number(count)}</strong>`)
    } else return(`Not palindrome, reverse value is <strong style="color:red">${Number(count)}</strong>`)
   
}

if(typeof x =="string"){
    let y=Array.from(x.split(" ").join("")).join("")
    let z=Array.from(x.split(" ").join("")).reverse().join("")
    if(y==z){
        return (`Palindrome,reverse value is <strong style="color:red">${z}</strong>`)
    } else return(`Not palindrome, reverse value is <strong style="color:red">${z}</strong>`)
}

}

document.querySelector(".rev").onclick=()=>{
    let x =document.getElementsByTagName("span")[0]
    x.innerHTML=check(document.querySelector("#num").value)
    
}

