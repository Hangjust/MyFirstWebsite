let lastRenderTime = 0
const SNAKE_SPEED = 2

function main(currentTime) {
  const secondSienceLastRender = (currentTime - lastRenderTime) /1000
  if secondSienceLastRender < 1 / SNAKE_SPEED 
  window.requestAnimationFrame(main)
  lastRenderTime = currentTime
  console.log(Render)
}

  window.requestAnimationFrame(main)
