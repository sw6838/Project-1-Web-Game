
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
        console.log(this.direction)
    }

    // update function takes in delta script.js
    update(delta) {
        this.x = 5
        this.y = 15

    }
}
    function randomNumberBetween(min, max) {
        return Math.random() * (max-min) + min
        
    }
