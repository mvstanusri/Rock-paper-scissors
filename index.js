let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loses:0,
  ties:0,

}

document.querySelector(".score").innerHTML =
`wins : ${score.wins} loses : ${score.loses} ties : ${score.ties}`;
let you;
let comp;
function updatescore(){
   document.querySelector(".score").
 innerHTML = `Wins : ${score.wins}  Loses : ${score.loses}  Ties : ${score.ties}`;
}
function getComputerChoice(){
   const num = Math.floor((Math.random()*3+1));

   if(num === 1){
    comp = 'rock';
   }
   else if(num === 2){
    comp = 'paper';
   }
   else{
    comp  =  'scissors'
   }
  return comp;
}
function playgame(you){
  let result;
   comp = getComputerChoice();
  if(you === 'rock'){
    if(comp === 'paper'){
      result = 'Computer Wins';
      score.loses++;
    }
    else if(comp === 'scissors'){
      result = 'You Win';
      score.wins++;
    }
    else{
       result = 'You both Tie';
       score.ties++;
    }
  }
  else if(you === 'paper'){
    if(comp === 'rock'){
      result = 'You Win';
      score.wins++;
    }
    else if(comp === 'scissors'){
      result = 'Computer Wins';
      score.loses++;
    }
    else{
       result = 'You both Tie';
       score.ties++;
    }
  }
    else if(you === 'scissors'){
    if(comp === 'paper'){
      result = 'You Win';
      score.wins++;
    }
    else if(comp === 'rock'){
      result = 'Computer Wins';
      score.loses++;
    }
    else{
       result = 'You both Tie';
       score.ties++;
    }
  }
   localStorage.setItem('score',JSON.stringify(score));
  
  document.querySelector(".result").innerHTML = 
  `You : ${you}<br>
   Computer : ${comp}<br>
   Result : ${result}`
  updatescore();

}

document.querySelector(".reset").addEventListener('click',() => {
   document.querySelector(".score").innerHTML =` wins : 0 loses : 0 ties : 0`
   score.wins = 0;
   score.loses = 0;
   score.ties = 0;
   localStorage.removeItem('score');
   updatescore();
    document.querySelector(".result").innerHTML =  `Choose Your Move`
});

document.querySelector(".rock").addEventListener('click',()=>{
     playgame("rock");
});
document.querySelector(".paper").addEventListener('click',()=>{
     playgame("paper");
});
document.querySelector(".scissors").addEventListener('click',()=>{
     playgame("scissors");
});




