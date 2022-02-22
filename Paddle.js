const SPEED =.02

export default class Paddle {
    constructor(paddleElem){
        this.paddleElem = paddleElem
        this.reset()
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value){
        this.paddleElem.style.setProperty("--position", value)
    }

    // rect function for the rectangles of the paddles to bounce the ball
    rect(){
        return this.paddleElem.getBoundingClientRect()
    }

    // To reset the paddle to the center of the screem
    
    reset(){
        this.position = 50
    }

//Computer paddle will use this update function to folow the ball on the screen
update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position) // paddle will use a certain speed otherwise it'll be impossible to beat the computer

}
}

