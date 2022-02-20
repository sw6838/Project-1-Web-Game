// Import ball from default export Ball.js
import Ball from "./Ball.js"

// Ball is a new ball with html Id 'ball'
//selecting an html element and creating a new class for ball
const ball = new Ball(document.getElementById("ball"))

//Variable lastTime
let lastTime

// How much time is passed since the start of the program
function update(time) {
    if (lastTime != null){
        const delta = time - lastTime
        ball.update(delta)
    }
        
        lastTime = time
    
  //Every frame is going to call update loop function
   window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)