console.log("hello")

$(document).ready(function(){
 console.log("ready") 
//Set Players
var player1 = "x";

var player2 = "o";
///set Turn
var turn = 0 ;

//Get Box's
var inputB1 = $("#b1").on('click', function(){
    if (turn%2 === 0){
      inputB1 = player1
    }else{
     inputB1 = player2
    }
       turn++;
  
  console.log(inputB1)

  $("#b1").html(inputB1);
  
  complete();

});

var inputB2 = $("#b2").on('click', function(){
    if (turn%2 === 0){
    inputB2 = player1
      }else{
     inputB2 = player2
      }
       turn++;
    
    $("#b2").html(inputB2);   
    console.log(inputB2)
    complete();
});

var inputB3 = $("#b3").on('click', function(){
    if (turn%2 === 0){
    inputB3 = player1
      }else{
     inputB3 = player2
      }
       turn++;

    console.log(inputB3)
    $("#b3").html(inputB3);
    complete(); 
});
   

var inputB4 = $("#b4").on('click', function(){
    if (turn%2 === 0){
    inputB4 = player1
    }else{
     inputB4 = player2
    }
       turn++;

    console.log(inputB4)
    $("#b4").html(inputB4);
    complete();
  });
    
var inputB5 = $("#b5").on('click', function(){
    if (turn%2 === 0){
    inputB5 = player1
    }else{
     inputB5 = player2
    }
       turn++;

    console.log(inputB5)
    $("#b5").html(inputB5);
    complete();
  });

var inputB6 = $("#b6").on('click', function(){
    if (turn%2 === 0){
    inputB6 = player1
      }else{
     inputB6 = player2
      }
       turn++;

    console.log(inputB6)
    $("#b6").html(inputB6);
    complete();
  });

var inputB7 = $("#b7").on('click', function(){
    if (turn%2 === 0){
    inputB7 = player1
      }else{
     inputB7 = player2
      }
       turn++;

    console.log(inputB7)
    $("#b7").html(inputB7);
    complete();
  });

var inputB8 = $("#b8").on('click', function(){
    if (turn%2 === 0){
    inputB8 = player1
      }else{
     inputB8 = player2
      }
       turn++;

    console.log(inputB8)
    $("#b8").html(inputB8);
    complete();
  });

var inputB9 = $("#b9").on('click', function(){
    if (turn%2 === 0){
    inputB9 = player1
      }else{
     inputB9 = player2
      }
       turn++;

    console.log(inputB9)
    $("#b9").html(inputB9);
    complete();
  });

function complete(){
  console.log("i'm complete")
  if (turn === 9){
    finalScore();
    console.log("hello")
  }else{
    console.log("it's working")
  }
}

function finalScore(){

  if ((inputB1 === inputB2) && (inputB2 ===inputB3)){
    console.log('winner');
  }else if ((inputB4 === inputB5) && (inputB5 === inputB6)){
    console.log('winner');
  }else if ((inputB7 === inputB8) && (inputB8 === inputB9)){
    console.log('winner');
  }else if ((inputB1 === inputB5) && (inputB5 === inputB9)){
    console.log('winner');
  }else if ((inputB3 === inputB5) && (inputB5 === inputB7)){
    console.log('winner');
  }else{
    console.log('loser');   
  }
    
  
}
complete();
});


  
