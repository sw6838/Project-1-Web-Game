// initial velocity of the ball 
const INITIAL_VELOCITY = .025
const VELOCITY_INCREASE = .0000001


/*Set an export default for our class Ball*/
export default class Ball{
    constructor(ballElem) {
        // ballElem is the ball on the screen
    this.ballElem = ballElem 
    // To reset balls and paddles at 50% in the middle of the page
    this.reset() 
    }

    /* Get and Set helper functions using balls direction and velocity 
    to help us calculate if it is bouncing off of wall or bouncing off of paddles*/
     get x(){
         return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
     }
     set x (value){
         this.ballElem.style.setProperty("--x", value)
     }

     get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }
    set y (value){
        this.ballElem.style.setProperty("--y", value)
    }

    // Function Rect To keep the ball within the boundaries of the rectangle of the page
    rect() {
        return this.ballElem.getBoundingClientRect()
    }

    // To reset balls and paddles at 50% in the middle of the page
    reset(){
        this.x = 50
        this.y = 50
        this.direction = { x:0 }
        while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9){
            // create random value between 0-2 pi to determine our direction
                const heading = randomNumberBetween(0, 2 * Math.PI)
                // take that direction and convert it into x and y position
                this.direction = {x: Math.cos(heading), y: Math.sin(heading)}
        }
        // initial velocity of the ball 
        this.velocity = INITIAL_VELOCITY
    }

    

    // update function takes in delta script.js
    update(delta, paddleRects) {
        /*take the direction x or y, multiply it by velocity 
        to calculate total movement 
        and times delta for long delays in the frame
        and move the ball with the frame time*/
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta

        // Velocity of the ball increases gradually during the game
        this.velocity +=VELOCITY_INCREASE * delta
         // Rect To keep the ball within the boundaries of the rectangle of the page
         const rect = this.rect()
        // if ball hit the bottom move upward on y axis; if hit top move downwards on y axis
         if (rect.bottom >= window.innerHeight || rect.top <= 0){
             this.direction.y *= -1
         }
         //if any of the paddles had the collision with the ball
         if (paddleRects.some(r => isCollision(r, rect))){
            this.direction.x *= -1
        }
    }
}
   // getting random ball direction every time
    function randomNumberBetween(min, max) {
        return Math.random() * (max-min) + min
        
    }

    function isCollision(rect1, rect2){
        return rect1.left <= rect2.right &&
               rect1.right >= rect2.left &&
               rect1.top <= rect2.bottom &&
               rect1.bottom >= rect2.top


    }
