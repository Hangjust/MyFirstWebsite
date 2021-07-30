let lastRenderTime = 0
const SNAKE_SPEED = 2

function main(currentTime) {
    window.requestAnimationFrame(main)
  const secondSienceLastRender = (currentTime - lastRenderTime) /1000
  if secondSienceLastRender < 1 / SNAKE_SPEED return
  
  
  
  
  
  lastRenderTime = currentTime
  console.log(Render)
  
  update ()
  draw ()
  
}

  window.requestAnimationFrame(main)


  function update () {
    
  }
  
  
  function draw () {
    
  }