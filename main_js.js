
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; 
  return a.filter(function (e) {
  if (b.indexOf(e) !== -1) return true;
  });
}

var player1 = "x";
var player2 = "o";
var xMoves = [];
var oMoves = [];
var turn = 0;
var winningLines =[
["b1", "b2", "b3"], ["b4", "b5", "b6"], ["b7", "b8", "b9"], ["b1", "b4", "b7"], ["b2", "b5", "b8"], ["b3", "b6", "b9"], ["b1", "b5", "b9"], ["b3", "b5", "b7"]
]

$(document).ready(function(){
 
  //Get Box's
  var inputBox = $(".box").on('click', function(){
    if (turn%2 === 0){
        inputBox = player1
        xMoves.push(this.id)
      }else{
       inputBox = player2
        oMoves.push(this.id)
      }
         turn++;
      
    // console.log(inputBox)

    $(this).html(inputBox); 
    winners(); 
  });


function winners(){
  // console.log('hello')
  $.each(winningLines, function(index, value){
   var xSame = intersect(value, xMoves)
   var oSame = intersect(value, oMoves)
    
   if(xSame.length === 3){
    console.log("Winner X")
   }else if(oSame.length === 3){
    console.log("Winner o")
   }
   
    // console.log(same)
    
  });  
}
 


  // function winner(){
   

    // $('winninglines').each(function(index, value){
    //   debugger;
    //   // if (xMoves === winningLines){
      // console.log("winner");
     
      // var result = winningLines.every(function(element, index, array) {
      //   console.log('index:', index);
      //   if (element === xMoves) {
      //      console.log("winner x");
      //  }else if (element === oMoves){
      //     console.log('winner o')
      //  }else{
      //   console.log('tie')
  //     //  }
      
  //    // });
  // } 
    
  

});

  
