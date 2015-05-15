
 //js code for Tic Tac Toe 

 //looks true two array's for similair values
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; 
  return a.filter(function (e) {
  if (b.indexOf(e) !== -1) return true;
  });
}

var player1 = "X";
var player2 = "O";
var xMoves = [];
var oMoves = [];
var turn = 0;
var winningLines =[
["b1", "b2", "b3"], ["b4", "b5", "b6"], ["b7", "b8", "b9"], ["b1", "b4", "b7"], ["b2", "b5", "b8"], ["b3", "b6", "b9"], ["b1", "b5", "b9"], ["b3", "b5", "b7"]
]

$(document).ready(function(){
 
  //Get Box's input box even and odd
 $(".box").on('click', function(){
    if (turn%2 === 0){
        var inputBox = player1
        xMoves.push(this.id)
        $(this).addClass('red')
      }else{
       inputBox = player2
        oMoves.push(this.id)
       $(this).addClass('blue') 
      }
         turn++;
      
    //console.log(inputBox)
    //Show Box on the page 
    $(this).html(inputBox); 
    winners(); 
  });


    //Get winner 
function winners(){
  // console.log('hello')
  //loops true the array//unbined click 
  var result;
  console.log('------------')
  var winLoseResult = winningLines.some(function(value){
   var xSame = intersect(value, xMoves)
   var oSame = intersect(value, oMoves)
   console.log(xSame, oSame, xMoves);
   if(xSame.length === 3){
    console.log('I am being run;')
    result = "PLAYER 1 <b> X WINS";
    $('.box').off('click'); 
    return true;
   }else if(oSame.length === 3){
    result = "PLAYER 2 : O WINS";
    $('.box').off('click');
    debugger
    return true;
   }
   //show winner on the page      
  });
 
  if ((!winLoseResult) && xMoves.length === 5) {
    result = "IT'S A TIE"
  };

  $(".results").html(result);  
}



$('.title').on('click', function(){
  console.log("kjbsfd")
  $('.box').on('click');
  $('.box').each(function(index, element){
    if($(element).hasClass( "red" )){
      $(element).removeClass('red');
      $(element).html('')
      xMoves=[]
      turn =0
    }
    else if($(element).hasClass( "blue" )){
      $(element).removeClass('blue');
      $(element).html('')
      oMoves=[]
      turn =0

    }
    
  }) 

});

});




  
