let score = JSON.parse(localStorage.getItem('score'));
updateScore();

function pickMove() {
  let comp=''
  let num2=Math.random();
  
  if (num2>=0 && num2<1/3){
    comp='Rock'
  }
  else if (num2>=1/3 && num2<2/3) {
    comp='Paper'
  }
  else {
    comp='Scissors'
  }

  return comp;
}

function updateScore() {
  document.querySelector('.js-score')
  .innerHTML=`Wins : ${score.Wins}, Losses: ${score.Losses}, Ties; ${score.ties}`;
}

function alerts(playerMove) {
  comp=pickMove();

  if (playerMove==='Paper') {
    if (comp==='Rock') {
      result='You win.';
    }
    else if (comp==='Paper') {
      result='Tie.';
    }
    else if (comp=='Scissors'){
      result='You Lose.';
    }
  }
  else if (playerMove==='Rock') {
    comp=pickMove();

    if (comp==='Rock') {
      result='Tie.';
    }
    else if (comp==='Paper') {
      result='You win.';
    }
    else {
      result='You Lose.';
    }
  }

  else if (playerMove==='Scissors') {
    comp=pickMove();

    if (comp==='Rock') {
      result='You Lose.';
    }
    else if (comp==='Paper') {
      result='You win.';
    }
    else {
      result='Tie.';
    }
  }

  if (result=== 'You win.') {
    score.Wins+=1
  }
  else if (result=== 'You Lose.') {
    score.Losses+=1
  }
  else {
    score.ties+=1
  }

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-moves').innerHTML=`You picked ${playerMove}. Computer picked ${comp}.`;

  updateScore()
}
let isautoplaying = false;
let intervalId;
function autoPlay() {
  if (!isautoplaying) {
    intervalId = setInterval(function(){
      const playerMove= pickMove();
      alerts(playerMove);
    },1000);
    isautoplaying = true;
  }
  else {
    clearInterval(intervalId);
    isautoplaying = false;
  }
}
