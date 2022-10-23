const game = () => {
     let pScore = 0;
     let cScore = 0;

     // start the game

     const startGame = () => {
          const playBtn = document.querySelector(".play-btn");
          const introScreen = document.querySelector(".intro");
          const match = document.querySelector(".match");

          playBtn.addEventListener('click', ()=>{
               introScreen.classList.add("fadeOut");
               match.classList.add("fadeIn");
          });
     };

     // play match

     const playMatch = () => {
          // player options
          const options = document.querySelectorAll(".options button");
          const playerHand = document.querySelector(".player-hand");
          const computerHand = document.querySelector(".computer-hand");
          // computer options
          const computerOption = ['rock', 'paper', 'scissors'];
          options.forEach(option => {
               option.addEventListener('click', function(){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOption[computerNumber];
                    // console.log(computerChoise);

                    // compare hands function
                    compareHands(this.textContent, computerChoice);
                    // Update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
               });
          });
     };

     const compareHands = (computerChoice, playerChoice) => {
          const winner = document.querySelector(".winner");
          if(computerChoice === playerChoice){
               winner.textContent ="Its a Tie !!";
               return;
          }

          // check for rock
          if(playerChoice === 'rock'){
               if(computerChoice === 'sciccors'){
                    winner.textContent = "Player Wins !!";
                    return;
               }else{
                    winner.textContent = "Computer Wins !!"
                    return;
               }
          };

          // check for paper
          if(playerChoice === 'paper'){
               if(computerChoice === 'sciccors'){
                    winner.textContent = "Computer Wins !!";
                    return;
               }else{
                    winner.textContent = "Player Wins !!"
                    return;
               }
          };

          // check Scissors
          if(playerChoice === 'scissors'){
               if(computerChoice === 'rock'){
                    winner.textContent = "Computer Wins !!";
                    return;
               }else{
                    winner.textContent = "Player Wins !!"
                    return;
               }
          };
     }

     // Is Call all the inner function
     startGame();
     playMatch();
};


// call all the function
game();