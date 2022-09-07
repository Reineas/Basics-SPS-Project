var getComputer = function () {var items = ['Scissor', 'Paper', 'Stone'];
{var item = items[Math.floor(Math.random() * 3)];
return item}
}

var currentGamemode = 'waiting for user name.'
var userName = 'Undefined'
var winGame = 0
var loseGame = 0

var main = function (input){
	   var myOutputValue = 'Please enter a valid option.'
	   var spsGame = ''
	
	   var computer = getComputer()
	
	   if (currentGamemode == 'waiting for user name.') {userName = input ; currentGamemode = spsGame ; myOutputValue = `Welcome ${userName} , please type in Scissor, Paper or Stone to start the game.` ; return myOutputValue} 
	
	   else if (currentGamemode == spsGame){ 
	      var userGuess = input
	      console.log (userName)
         
         if (computer == 'Paper' && userGuess == 'Scissor'||computer == 'Scissor' && userGuess == 'Stone'||
	      computer == 'Stone' && userGuess == 'Paper') 
	      {winGame = winGame + 1;
	         var myOutputValue =  'Dear ' + userName + '. You lose! You have chosen ' + userGuess + '. The computer has chosen ' + computer + '. You have lost:' + loseGame + " time(s). You have won:" + winGame + " time(s)." }
            
            if (computer == 'Paper' && userGuess == 'Stone'||
	      computer == 'Scissor' && userGuess == 'Paper'||
	      computer == 'Stone' && userGuess == 'Scissor')
	      {loseGame = loseGame + 1;
	         var myOutputValue =  'Dear ' + userName + '. You lose! You have chosen ' + userGuess + '. The computer has chosen ' + computer + '. You have lost:' + loseGame + " time(s). You have won:" + winGame + " time(s)." }
            
            if (computer == userGuess ){var myOutputValue = "It's a tie!"}
            return myOutputValue}}
	