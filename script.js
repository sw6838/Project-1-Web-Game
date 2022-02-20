import Ball from "./Ball.js"
const ball = new Ball(document.getElementbyId("ball"))
let lastTime
function update(time) {
   window.requestAnimationFrame(update)
}
