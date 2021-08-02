import (draw as drawSnake, update as updateSnake,  SNAKE_SPEED ) from ''./snake.js '

  
  
  let lastRenderTime = 0
  const gameBoard = document.getElementById('game-board')
  
function main(currentTime) {
    window.requestAnimationFrame(main)
  const secondSienceLastRender = (currentTime - lastRenderTime) /1000
  if secondSienceLastRender < 1 / SNAKE_SPEED return
  
  
  
  
  
  lastRenderTime = currentTime

  update ()
  draw ()
  
}

  window.requestAnimationFrame(main)


  function update () {
    updateSnake()
  }
  
  
  function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
  }