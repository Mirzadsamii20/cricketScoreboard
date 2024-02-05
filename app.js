// selecting elements
let  runs = document.getElementById("runs");
let  wickets  = document.getElementById("wickets");
let  target  = document.getElementById("target");
// let   overs = document.getElementById("overs");
let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnFour = document.getElementById("four");
let btnSix = document.getElementById("six");
let btnWicket = document.getElementById("out");

runs.textContent = 0;
wickets.textContent = 1;
console.log(wickets.textContent)
target.textContent = '94';



// Defining score runs for scoreboard

btnOne.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){
      (runs.textContent) ++;
    ballsF();

    }
})
btnTwo.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){

    runs.textContent = parseInt(runs.textContent)+2;
    ballsF();
}


})
btnFour.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){

    runs.textContent = parseInt(runs.textContent)+4; 
    ballsF();
}
    

})
btnSix.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent< 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){
        // console.log(parseInt(runs.textContent) , parseInt(target.textContent), parseInt(wickets.textContent) , )

    runs.textContent = parseInt(runs.textContent)+6;
    ballsF();}
   

})
 

btnWicket.addEventListener('click', function(){
    if (overs.textContent < 10 && wickets.textContent  <10  && (runs.textContent) <= (target.textContent)+5 ){
    wickets.textContent = parseInt(wickets.textContent) + 1;
    ballsF();
    }
    
})

let overs = document.getElementById('overs');
let balls = document.getElementById('balls');



balls.textContent = 0;
overs.textContent = 0;
function ballsF(){
    if(overs.textContent < 10)
    balls.textContent = parseFloat(balls.textContent) + 1;
    if(balls.textContent == 6 && overs.textContent < 10){
        overs.textContent ++;
        balls.textContent = 0;
    }

    

}