function Board() {
  this.width = BOARD_WIDTH;
  this.height = BOARD_HEIGHT
  this.score1 = 0
  this.score2 = 0
  this.initialPosition = INITIAL_POSTIION
}

Board.prototype.start = function(){
  this.score1 = 0
  this.score2 = 0
};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
