//IF THE PLAYER DOESN’T WANT TO PLAY



//BOT -- the bot chosen between 3 items
const item = ['stone', 'leaf', 'chisel'];
const choseRandom = Math.floor(Math.random() * 3) //choose between 0 and 2 knowing that [0;3]
const choseFinalBot = item[choseRandom]; //save the position value in the choseFinalBot


//PLAYER -- player choice
const buttonItems = document.querySelectorAll(".buttonChose");
let choseFinalPlayer = null; //starting variable without an initial value
buttonItems.forEach((buttonItem) =>
  buttonItem.addEventListener("click", handleClick)
);


//BUTTON HANDLING FUNCTION
function handleClick({ target: buttonClicked }) {
  buttonItems.forEach((buttonItem) => {
    if (buttonClicked === buttonItem) {
      choseFinalPlayer = buttonClicked.textContent;
      buttonClicked.classList.add("select"); //Allows to see the choice of the player
    } else {
      buttonItem.setAttribute("disabled", true); //disable buttons not select
      buttonItem.style.backgroundColor = 'rgba(236, 219, 186, 0.5)'; //Allows you to see that these options are no longer active
    }
  });
  winOrLose();
}
//VERIFICATION AND TIMER BEFORE RESPONSE
function winOrLose() {
  const containerTimer = document.getElementById('containerTimer');
  const timer = document.getElementById('temp');
  let temps = 3; //Setting the timer to 3s
  const gif = document.querySelector('.gif');
  const responseBot = document.querySelector('.responseBot');

  if (choseFinalBot != null && choseFinalPlayer != null) {
    const time = setInterval(() => {
      containerTimer.style.display = 'block';
      timer.innerText = temps;
      temps--
      if (temps === -1) { //-1 because at 0 it will stop at 1s 
        options();
        clearInterval(time);
        containerTimer.style.display = 'none';
        gif.style.display = 'none';
        responseBot.innerText = choseFinalBot;
        responseBot.style.display = 'flex'
        popupWin();
      }
    }, 1000);
  }
}
//THE DIFFERENT OPTIONS AVAILABLE 
function options() {
  const selectButtonPlayer = document.querySelector('.select');
  //IN THE CASE OF THE CHOICE OF THE STONE
  if (choseFinalBot == 'stone' && choseFinalPlayer == 'LEAF') {
    document.body.style.background = "#4E944F";  //BOT LOSE
    selectButtonPlayer.style.backgroundColor = '#4E944F'
  } else if (choseFinalBot == 'stone' && choseFinalPlayer == 'CHISEL') {
    document.body.style.background = "#EB1D36";  //BOT WIN
    selectButtonPlayer.style.backgroundColor = '#EB1D36';
  } else if (choseFinalBot == 'stone' && choseFinalPlayer == 'STONE') {
    document.body.style.background = "#1B2430" //EQUALIZE
    selectButtonPlayer.style.backgroundColor = '#1B2430';
  }
  //IN THE CASE OF THE CHOICE OF LEAF
  if (choseFinalBot == 'leaf' && choseFinalPlayer == 'CHISEL') {
    document.body.style.background = "#4E944F";  //BOT LOSE
    selectButtonPlayer.style.backgroundColor = '#4E944F'
  } else if (choseFinalBot == 'leaf' && choseFinalPlayer == 'STONE') {
    document.body.style.background = "#EB1D36";  //BOT WIN
    selectButtonPlayer.style.backgroundColor = '#EB1D36';
  } else if (choseFinalBot == 'leaf' && choseFinalPlayer == 'LEAF') {
    document.body.style.background = "#1B2430" //EQUALIZE
    selectButtonPlayer.style.backgroundColor = '#1B2430';
  }
  //IN THE CASE OF THE CHOICE OF CHISEL
  if (choseFinalBot == 'chisel' && choseFinalPlayer == 'STONE') {
    document.body.style.background = "#4E944F";  //BOT LOSE
    selectButtonPlayer.style.backgroundColor = '#4E944F'
  } else if (choseFinalBot == 'chisel' && choseFinalPlayer == 'LEAF') {
    document.body.style.background = "#EB1D36";  //BOT WIN
    selectButtonPlayer.style.backgroundColor = '#EB1D36';
  } else if (choseFinalBot == 'chisel' && choseFinalPlayer == 'CHISEL') {
    document.body.style.background = "#1B2430" //EQUALIZE
    selectButtonPlayer.style.backgroundColor = '#1B2430';
  }
}
//END OF POP-UP
function popupWin() {
  const overlay = document.getElementById('overlay');
  if (document.body.style.background === "rgb(78, 148, 79)") { //player win
    overlay.innerHTML =
      `
    <div class="popup">
      <h1 class="titlePopUp">You won !</h1>
      <hr>
      <p class="paragraphPopUp"><span>Cheer ! </span>You beat Bob.</p>
        <div class="buttonContainer">
          <a href="game.html">
            <button class="restart">RESTART</button>
          </a>
          <a href="/home.html">
            <button class="leave">LEAVE THE GAME</button>
          </a>
        </div>
    </div>
    `
  } else if (document.body.style.background === "rgb(235, 29, 54)") { //player lose 
    overlay.innerHTML =
      `
    <div class="popup">
      <h1 class="titlePopUp">You lost !</h1>
      <hr>
      <p class="paragraphPopUp"><span>Oh no ! </span>No Bob won.</p>
        <div class="buttonContainer">
          <a href="game.html">
            <button class="restart">RESTART</button>
          </a>
          <a href="/home.html">
            <button class="leave">LEAVE THE GAME</button>
          </a>
        </div>
    </div>
    `
  } else { //equalize
    overlay.innerHTML =
      `
    <div class="popup">
      <h1 class="titlePopUp">Equalize</h1>
      <hr>
      <p class="paragraphPopUp"><span>person </span>to win.</p>
        <div class="buttonContainer">
          <a href="game.html">
            <button class="restart">RESTART</button>
          </a>
          <a href="/home.html">
            <button class="leave">LEAVE THE GAME</button>
          </a>
        </div>
    </div>
    `
  }
  overlay.style.display = 'flex'; //displays the overlay
  overlay.style.backgroundColor = 'rgba(57, 62, 70, 0.5)'
}