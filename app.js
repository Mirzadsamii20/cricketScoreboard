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
const resultEl = document.getElementById("result");

runs.textContent = 0;
wickets.textContent = 0;
console.log(wickets.textContent)
target.textContent = Math.floor(Math.random()*20 + 100);



// Defining score runs for scoreboard

btnOne.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){
      (runs.textContent) ++;
    ballsF();
  
    }
    checkWinLose();

})
btnTwo.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){

    runs.textContent = parseInt(runs.textContent)+2;
    ballsF();
}
checkWinLose();



})
btnFour.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent < 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){

    runs.textContent = parseInt(runs.textContent)+4; 
    ballsF();
}
checkWinLose();


})
btnSix.addEventListener('click', function(){
    if ( overs.textContent < 10 && wickets.textContent< 10 && parseInt(runs.textContent) <=( parseInt(target.textContent ))){
        // console.log(parseInt(runs.textContent) , parseInt(target.textContent), parseInt(wickets.textContent) , )

    runs.textContent = parseInt(runs.textContent)+6;
    ballsF();}
    checkWinLose();


})
 

btnWicket.addEventListener('click', function(){
    if (overs.textContent < 10 && wickets.textContent  <10  && Number(runs.textContent) <= Number(target.textContent)+5 ){
    wickets.textContent = parseInt(wickets.textContent) + 1;
    ballsF();
    }
    checkWinLose();

    
})


function checkWinLose(){
    if(overs.textContent == 10 && runs.textContent < target.textContent) resultEl.textContent = ( "You lost , No balls left");
    if(wickets.textContent == 10 && Number(runs.textContent) < Number(target.textContent)) resultEl.textContent = ( "You lost by " + (Number(target.textContent) - Number(runs.textContent) - 1) + " runs , You are all out in " + overs.textContent+"."+balls.textContent + " overs")

    if( Number(runs.textContent) > Number(target.textContent)) resultEl.textContent = ( `You win by${10 - wickets.textContent} wickets with ${(10 - overs.textContent) * 6 +Number( balls.textContent)} balls left`   )
    if(overs.textContent == 10 && runs.textContent == target.textContent) resultEl.textContent = ( "You draw ")


}

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