let field=document.getElementById("field");
let ball = document.getElementById("ball");
let cords = field.getBoundingClientRect();
 field.addEventListener("click",(event)=>{
   
    let top=(event.clientY-cords.top-ball.offsetHeight/2-field.clientTop);
    let left=(event.clientX-cords.left-ball.offsetWidth/2-field.clientLeft); 
    ball.style.top=top+"px"
    ball.style.left=left+"px"
    
    if(parseInt(ball.style.top)<0){
        ball.style.top=0+"px"
    }
    if(parseInt(ball.style.left)<0){
        ball.style.left=0+"px"
    }
    if(parseInt(ball.style.left)>(field.clientWidth-ball.offsetWidth)){
        ball.style.left=(field.clientWidth-ball.offsetHeight)+"px"
    }
    
    if(parseInt(ball.style.top)>(field.clientHeight-ball.offsetHeight)){
        ball.style.top=(field.clientHeight-ball.offsetHeight)+"px"
    }
})


document.addEventListener("keydown",(event)=>{
    switch (event.key) {
        case "ArrowRight":
            ball.style.left=parseInt(ball.style.left)+100+"px";
            if(parseInt(ball.style.left)>(field.clientWidth-ball.offsetWidth)){
                ball.style.left=(field.clientWidth-ball.offsetHeight)+"px"
            }
            ball.style.transform="rotate(180deg)"
            break;
        case "ArrowUp":
            ball.style.top=parseInt(ball.style.top)-100+"px";
            if(parseInt(ball.style.top)<0){
                ball.style.top=0+"px"
            }
            ball.style.transform="rotate(-180deg)"
            break;
        case "ArrowLeft":
            ball.style.left=parseInt(ball.style.left)-100+"px";
            if(parseInt(ball.style.left)<0){
                ball.style.left=0+"px"
            }
            ball.style.transform="rotate(-180deg)"
            break;
        case "ArrowDown":
            ball.style.top=parseInt(ball.style.top)+100+"px";
            if(parseInt(ball.style.top)>(field.clientHeight-ball.offsetHeight)){
                ball.style.top=(field.clientHeight-ball.offsetHeight)+"px"
            }
            ball.style.transform="rotate(180deg)"
            break;
    }
})
