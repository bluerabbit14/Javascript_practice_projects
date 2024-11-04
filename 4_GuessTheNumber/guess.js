let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)     //.value returns a string
       // console.log(guess);
       validateGuess(guess)
    })
}
function validateGuess(guess)     //check wheather the value is between 1-100
{
   if(isNaN(guess) || guess<1 || guess >100)
   {
    alert('please enter a valid number')
   }
   else
   {
    prevGuess.push(guess)
    if(numGuess === 11)
    {
        displayGuess(guess)
        displayMessage(`Game Over.Random number was ${randomNumber}`)
        endGame();
    }else
    {
       displayGuess(guess)
       checkGuess(guess)
    }     
   }
}
function checkGuess(guess)       //check condtion the guess value and random number is equal or not
{
    if(guess === randomNumber)
    {
        displayMessage('You Guessed it right')
        endGame()
    }else if(guess<randomNumber)
    {
        displayMessage('Number is Tooo low')
    }else if(guess>randomNumber)
    {
        displayMessage('Number is Tooo high')
    }
}
function displayGuess(guess)         //clean the previous input value and update previous guesses and update guess remain
{
       userInput.value=''
       guessSlot.innerHTML+=`${guess}, `
       numGuess++
       remaining.innerHTML=`${11 -numGuess}`
}
function displayMessage(Message)  //display a message
{
    lowOrHi.innerHTML=`<h2>${Message}</h2>`
}
function newGame()
{
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
       randomNumber=parseInt(Math.random()*100+1)
       prevGuess=[]
       numGuess=1
       guessSlot.innerHTML=''
       remaining.innerHTML=`${11 -numGuess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)
       playGame=true;
    })
}
function endGame()
{
    userInput.value='' 
    userInput.setAttribute('disabled','')  //key value pair  
    p.classList.add('button')
    p.innerHtml=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}