

const mario = document.getElementById("mario")




function jump(){
    setTimeout(()=>{
        mario.classList.remove("jump")
        mario.setAttribute("src" , "./icons/mario.png")
    } , 600)
    
    mario.classList.add("jump")
    mario.setAttribute("src" , "./icons/marioJumping.png")
}







mario.addEventListener("click" , jump)