var MOVEMENT = 10

function Paddle(player, x,y) {
  this.player = player;
  this.x = x;
  this.y = y;
  this.height = PADDING_HEIGTH;
  this.width = PADDING_WIDTH;
}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
  if (this.y == ball_y) {

  }

};

Paddle.prototype.isPossibleToMoveY = function(board, command){
  switch(command){
    case COMMAND_UP:
        return this.y - MOVEMENT >= this.height - this.height/2 ? COMMAND_UP : false
        break;

    case COMMAND_DOWN:
        return this.y + MOVEMENT <=  board.height - this.height/2 ? COMMAND_DOWN : false
        break;
  }

};

Paddle.prototype.moveY = function(board, command){

  switch(this.isPossibleToMoveY(board, command)){
    case COMMAND_UP:
        this.y -= MOVEMENT
        break;

    case COMMAND_DOWN :
        this.y += MOVEMENT
        break;
  }
};
