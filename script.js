
import Ball from "./Ball.js"

import Paddle from "./Paddle.js"

//selecting an html element by id and creating a new class for it
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

//Variable lastTime
let lastTime

// How much time is passed since the start of the program
function update(time) {
    if (lastTime != null){
        const delta = time - lastTime
        ball.update(delta)
        //Computer paddle will use update function in paddle class and follow the ball movement
        computerPaddle.update(delta, ball.y)
    }
        
        lastTime = time
    
  //Every frame is going to call update loop function
   window.requestAnimationFrame(update)
}

// Player paddle will move with mouse move
document.addEventListener("mousemove", e =>{
    playerPaddle.position = (e.y / window.innerHeight) * 100 
    // Divide to convert to % for css position value

})

window.requestAnimationFrame(update)