const SPEED =.02

export default class Paddle {
    constructor(paddleElem){
        this.paddleElem = paddleElem
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value){
        this.paddleElem.style.setProperty("--position", value)
    }

//Computer paddle will use this update function to folow the ball on the screen
update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position) // paddle will use a certain speed otherwise it'll be impossible to beat the computer

}
}

