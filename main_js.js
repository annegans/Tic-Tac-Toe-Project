
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
  var inputBox = $(".box").on('click', function(){
    if (turn%2 === 0){
        inputBox = player1
        xMoves.push(this.id)
      }else{
       inputBox = player2
        oMoves.push(this.id)
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
  $.each(winningLines, function(index, value){
   var xSame = intersect(value, xMoves)
   var oSame = intersect(value, oMoves)
    
   if(xSame.length === 3){
    var result = "Winner X";
    $('.box').unbind('click');
   }else if(oSame.length === 3){
    var result = "Winner O";
    $('.box').unbind('click');
   }else if(xMoves.length === 5){
    var result = "Tie";
    $('.box').unbind('click');
   }
   //show winner on the page 
   $(".results").html(result);
     
  });  
}

//reset
function reset(){
}
 
});



  
