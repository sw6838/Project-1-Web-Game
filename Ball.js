
/*Set an export default for our class Ball*/
export default class Ball{
    constructor(ballElem) {
        // ballElem is the ball on the screen
    this.ballElem = ballElem  
    }

    /* helper functions using balls direction and velocity 
    to help us calculate if it is bouncing off of wall or bouncing off of paddles*/
     get x(){
         return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
     }
     set x (value){
         this.ballElem.style.setProperty("--x", value)
     }
    // update function takes in delta script.js
    update(delta) {
        this.x = 5

    }
}