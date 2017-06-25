var BALL_MOVEMENT = 10


function Ball(paddle1, paddle2) {
  this.paddle1 = paddle1
  this.paddle2 = paddle2
  this.x = (board.width/2 - 15)
  //this.y = (board.height/2 - 15)
  this.y = 0
  this.width = PADDING_WIDTH
  this.height = PADDING_HEIGTH
  this.directionX = this.randomDirection()
  this.directionY = this.randomDirection()
  this.movementX = Math.random() * BALL_MOVEMENT
  this.movementY = Math.random() * BALL_MOVEMENT
}

Ball.prototype.randomDirection = function() {
  return Math.random() >= 0.5 ? 1 : -1
};

Ball.prototype.move = function(callback) {
  // var direction = this.direction * this.randomDirection() ? -1 : 1

  var interval = setInterval (function () {


    callback()
    if (this.paddle2.x <= this.x || this.paddle1.x >= this.x) {
      console.log('paddle1 width:', this.x, BOARD_WIDTH, 'paddle1 width:', this.y, BOARD_HEIGHT)
      console.log('paddle2 width:', this.x, BOARD_WIDTH, 'paddle2 width:', this.y, BOARD_HEIGHT)

      if ((this.y < this.paddle2.y && this.y > this.paddle2.y - this.paddle2.height) || (this.y < this.paddle1.y && this.y > this.paddle1.y - this.paddle1.height)) {
        clearInterval(interval)
        this.directionX *= -1
        this.movementX = Math.random() * BALL_MOVEMENT
        this.movementY = Math.random() * BALL_MOVEMENT
        this.move(callback)
      }
    }

    if (this.y <= 0 || this.y >= BOARD_HEIGHT) {
        clearInterval(interval)
        this.directionY *= -1
        this.move(callback)
    }
    if (this.y < 0 || this.y >= BOARD_HEIGHT && this.x < 0 || this.x >= BOARD_WIDTH) {
      clearInterval(interval)

    }
    this.x += this.movementX * this.directionX
    this.y += this.movementY * this.directionY
  }.bind(this), 30)
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
