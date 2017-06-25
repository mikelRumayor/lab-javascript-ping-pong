var COMMAND_UP = 'UP'
var COMMAND_DOWN = 'DOWN'
var BOARD_HEIGHT = 600
var BOARD_WIDTH = 1000
var INITIAL_POSTIION = 50

var WEB_WIDTH = 5

var PADDING_WIDTH = 10
var PADDING_HEIGTH = 150

var board = new Board();
var paddle1 = new Paddle(1, 20, board.height/2);
var paddle2 = new Paddle(2, board.width -  paddle1.width - 20, board.height/2);
var ball = new Ball( paddle1, paddle2);


$(function(){
  renderGame()
  renderPaddle(paddle1)
  renderPaddle(paddle2)
  renderBall(board)
}())


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
  var possibleKeys = [38, 40]

  if (possibleKeys.indexOf(e.keyCode) > -1) {
    e.keyCode === 38 ? paddle1.moveY(board, COMMAND_UP) :  paddle1.moveY(board, COMMAND_DOWN)
    renderPaddle(paddle1)
  }

});

function activatePaddle2() {
}

function renderGame(){
  if (!$('#board').length) {
    var boardElement = $('<div id="board">')
    $(boardElement).css('width' , board.width)
    $(boardElement).css('height' , board.height)
    $(boardElement).css('border','1px solid black')
    $(boardElement).css('margin','0 auto')
    $(boardElement).css('border','1px solid black')
    $(boardElement).css('position','absolute')
    $(boardElement).css('top', board.initialPosition + 'px')


    renderWeb()

    $('body').append(boardElement)

  } else {

  }


  function renderWeb () {

    var paddleElement = $('<div>')
    $(paddleElement).css('width' , WEB_WIDTH)
    $(paddleElement).css('height' , board.height)
    $(paddleElement).css('border','1px solid black')
    $(paddleElement).css('margin','0 auto')
    $(paddleElement).css('border','1px solid black')

    boardElement.append(paddleElement)
  }




}

function renderScore(){
}

function renderBall(board){
  if (!$('#ball').length) {
      var paddleElement = $('<div id="ball">')
      $(paddleElement).css('width' , 30)
      $(paddleElement).css('height' ,30)
      $(paddleElement).css('top', 0)
      $(paddleElement).css('border','1px solid black')
      $(paddleElement).css('position', 'absolute')
      $(paddleElement).css('barder-radius', '30px')
      $(paddleElement).css('transform', 'translate(' + ball.x + 'px,'+ ball.y + 'px)')

      $('#board').append(paddleElement)
    }
    console.log(ball.x)
    console.log(ball.y)

    ball.move(function () {
      $('#ball').css('transform', 'translate(' + ball.x + 'px,' + ball.y + 'px')
    })

}

function renderPaddle(paddle){
  if (!$('#player' + paddle.player).length) {

    var paddleElement = $('<div id="player' + paddle.player + '"">')
    $(paddleElement).css('width' , paddle.width)
    $(paddleElement).css('height' , paddle.height)
    $(paddleElement).css('top', 0)
    $(paddleElement).css('position','absolute')
    $(paddleElement).css('transform', 'translateY(' + (paddle.y - paddle.height/2) + 'px)')

    if (paddle.player === 1) {
      $(paddleElement).css('left', 20)
    } else  if (paddle.player === 2) {
      $(paddleElement).css('left', board.width -  paddle.width - 20)
    }

    $(paddleElement).css('border','1px solid black')

    $('#board').append(paddleElement)
  }
    // $('#player' + paddle.player).css('top', paddle.y - paddle.height/2).
    $('#player' + paddle.player).css('transform', 'translateY(' + (paddle.y - paddle.height/2) + 'px)')

}
