
import Ball from "./Ball.js"

import Paddle from "./Paddle.js"

//selecting an html element by id and creating a new class for it
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

//Variable lastTime
let lastTime

//Every frame is going to be updated 
function update(time) {
    if (lastTime != null){
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        //Computer paddle will use update function in paddle class and follow the ball movement
        computerPaddle.update(delta, ball.y)

        // To reset the game if we have lost the game
        if (isLose()) handleLose()
    }
        
  //Every frame is going to call update loop function
        lastTime = time
    
   window.requestAnimationFrame(update)
}

function isLose (){
const rect = ball.rect()
    // If the ball is outside of the bounds; we have lost
    return rect.right >= window.innerWidth || rect.left <= 0
}

// to handle the islose funton with the movement of the ball
function handleLose(){
    const rect = ball.rect()
    if (rect.right >= window.innerWidth){
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else{
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }

    ball.reset()
    computerPaddle.reset()
}


// Player paddle will move with mouse move
document.addEventListener("mousemove", e =>{
    playerPaddle.position = (e.y / window.innerHeight) * 100 
    // Divide to convert to % for css position value

})

window.requestAnimationFrame(update)