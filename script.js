'use strict';
const score0El=document.querySelector("#score--0");
const score1El=document.querySelector("#score--1");
const diceEl=document.querySelector(".dice");
const btnNew=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");
const current0El=document.querySelector("#current--0");
const current1El=document.querySelector("#current--1");
score0El.textContent=0;
score1El.textContent=0;
const scores=[0,0];
let currentScore=0;
let activePlayer=0;
diceEl.classList.add("hidden");
btnRoll.addEventListener("click",function(){
const dice = Math.trunc(Math.random()*6)+1;
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;
if(dice!=1){
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else{
currentScore=0;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
activePlayer=activePlayer===1?0:1;
}
})
btnHold.addEventListener("click",function(){
scores[`${activePlayer}`]+=currentScore;
document.querySelector(`#score--${activePlayer}`).textContent=scores[`${activePlayer}`];
currentScore=0;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
if(scores[0]>=100){
document.querySelector(".player--0").style.backgroundColor='#222'; 
}
if(scores[1]>=100){
document.querySelector(".player--1").style.backgroundColor='#222';
}
activePlayer=activePlayer===1?0:1;
})
btnNew.addEventListener("click",function(){
diceEl.classList.add("hidden");
score0El.textContent=0;
score1El.textContent=0;
scores=[0,0];
currentScore=0;
activePlayer=0;
})
