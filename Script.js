



let four = document.querySelector('.four') // pays 2 to 1
let five = document.querySelector('.five') // pays 3 to 2
let six = document.querySelector('.six') // pays 5:6
let eight = document.querySelector('.eight') // pays 5:6
let nine = document.querySelector('.nine')// pays 3 to 2
let ten = document.querySelector('.ten') // pays 2 to 1



let fourPoint = document.querySelector('.fourPoint') // pays 2 to 1
let fivePoint = document.querySelector('.fivePoint') // pays 3 to 2
let sixPoint = document.querySelector('.sixPoint') // pays 5:6
let eightPoint = document.querySelector('.eightPoint') // pays 5:6
let ninePoint = document.querySelector('.ninePoint')// pays 3 to 2
let tenPoint = document.querySelector('.tenPoint') // pays 2 to 1


let comeBetFour = document.querySelector('.comeBetFour')
let comeBetFive = document.querySelector('.comeBetFive')
let comeBetSix = document.querySelector('.comeBetSix')
let comeBetEight = document.querySelector('.comeBetEight')
let comeBetNine = document.querySelector('.comeBetNine')
let comeBetTen = document.querySelector('.comeBetTen')
let comeBet = document.getElementById('comeBar')

let field = document.querySelector('.field')

const chips10 = document.getElementById('chips10')
const chips25 = document.getElementById('chips25')
const chips50 = document.getElementById('chips50')
const chips100 = document.getElementById('chips100')

const externalComment = document.getElementById("external-comment")
var ul = document.getElementById("ulCOMMENT")

let index = 0;
let indexColors = 0; 

const colors = ['black', 'transparent'];
const textColors = ['white', 'black'];
 

    var chipsBool10 = false
    var chipsBool25 = false
    var chipsBool50 = false
    var chipsBool100 = false



var fieldImg = document.getElementById("fieldImg")
var comeBarImg = document.getElementById('comeBarImg')


let flag = "./emoji_flags_FILL0_wght400_GRAD0_opsz48 (1).png"

 

chips10.addEventListener('click', ()=>{
    chips10.style.backgroundColor = colors[index];
    chips10.style.color = textColors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
    indexColors = indexColors >= textColors.length - 1 ? 0 : indexColors + 1;
    chipsBool10 = !chipsBool10
    

	
    
});

chips25.addEventListener('click', ()=>{
    chips25.style.backgroundColor = colors[index];
    chips25.style.color= textColors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
    indexColors = indexColors >= textColors.length - 1 ? 0 : indexColors + 1;
    chipsBool25 = !chipsBool25
    
 
});


chips50.addEventListener('click', ()=>{
    chips50.style.backgroundColor = colors[index];
    chips50.style.color = textColors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
    indexColors = indexColors >= textColors.length - 1 ? 0 : indexColors + 1;
    
    chipsBool50 = !chipsBool50
    
    
    
  
});

chips100.addEventListener('click', ()=>{
    chips100.style.backgroundColor = colors[index];
    chips100.style.color = textColors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
    indexColors = indexColors >= textColors.length - 1 ? 0 : indexColors + 1;
    
    chipsBool100 = !chipsBool100
    
    
});


function betChecker(){
	/* 
	
	check to see if value is true,
	if so add amount to whatever bet is being clicked on.
	*/

	if(chipsBool10 === true){
		//add amount to count
		passbet = passbet + 10
        playerCount = playerCount - 10
        updatePlayerBank()
     
		
	}
	else if(chipsBool25 === true){
		passbet = passbet + 25
        playerCount = playerCount - 25
        updatePlayerBank()
	}
	else if(chipsBool50 === true){
		passbet = passbet + 50
        playerCount = playerCount - 50
        updatePlayerBank()
	}
	else if(chipsBool100 === true){
		passbet = passbet + 100
        playerCount = playerCount - 100
        updatePlayerBank()
	}
    
	chipCountUpdate()

}

let fieldBetOne = document.querySelector('.fieldBet')

let fieldBetNumeral = 0





function testCommentAdd(){
    var li = document.createElement("li");
    li.prepend(document.createTextNode(declared));
    ul.prepend(li);
    
}


var declared = ""

// append to comment log anywhere theres a comment instead of console.log
//assign create text node to variable? change variable depending on whats being printed?

let pointGame = 0;

let passLine = document.getElementById('passLine')

let passLineUp = document.getElementById('passLineUp')



let winningCount = 0
let loosingCount = 0
loose = false

let wins = document.querySelector(".wins")
let losses = document.querySelector('.losses')


let startCount =  Math.floor(0)

let chipCount = document.querySelector('.chipCount')

let betClear = document.getElementById("clearBets")


var playerCount = 1000
var playerBank = document.querySelector('.playerBank')


playerBank.innerHTML = playerCount 




function updatePlayerBank(){
    playerBank.innerHTML = playerCount 
}

// players bank = playersbank + winnings


function playerBankUpdate(){
    playerBank.innerHTML = playerCount // is equal to whatever the amount is.
    // needs to be replaced with amount + winnings = playercount. 
}

game = false
win = false
comeBetBool = false


comeBet.addEventListener('click', ()=> {
    
    if(game === true){
        comeBetBool = true
        
        comeBarImg.src = flag
		
    }
    else if(game === false){
       
        declared = "The game hasnt started yet, you cannot place a come bet"
        testCommentAdd()
    }

})


// on click - set value of come bet to 10
// if point on - roll and equate that value to the come bet



passLineImg = document.getElementById('passlineImg')

let emptyImage = ''
passline = false

function passLineBet(){
    passline = true
    
	betChecker()

}







passLine.addEventListener('click', passLineBet)
passLine.addEventListener('contextmenu', passLineRightClick);
passLineUp.addEventListener('contextmenu', passLineRightClick)
passLineUp.addEventListener('click', passLineBet)

function passLineRightClick(e){
    e.preventDefault()
    
    if(passbet <= 0){
        passbet = 0
        passLineBetAmount.innerHTML = passbet
        
    } else {
        passbet = passbet - 10
        passLineBetAmount.innerHTML = passbet
    playerCount = playerCount + 10
    updatePlayerBank()
    
}
}

/* Field bet info needs to be here
Field bet game - 
    game is simple = 
        start by adding value to field bet (left click adds value ____ right click removes value. ) /
            if won - add value to bank 
            if loss - remove bet / 
        bets remove value from bank
    stop player from playing less than 0 / 
    all player to remove bets

*/

field.addEventListener('click', fieldBet) // left click adds    
field.addEventListener('contextmenu', fieldRightClick); // right click removes

function fieldRightClick(e){
    e.preventDefault()
    
    if(fieldBetNumeral <= 0){
        fieldBetNumeral = 0
        fieldBetBool = false
    } else {
    fieldBetNumeral = fieldBetNumeral - 10
    field.innerHTML = fieldBetNumeral
    playerCount = playerCount + 10
    updatePlayerBank()
    
}
    
    // use this to reduce amount by 10. Clicking sets to true or false. 
    //update image with new value
}

var fieldBetBool = false // default should be false

function fieldBet(){ 
    fieldBetBool = true // sets true when you bet
	fieldBetter() // fieldBetter is the math behind the bets
	chipFieldBet() // update inner html
    field.innerHTML = fieldBetNumeral // set innerHTML 
}

function chipFieldBet(){
	fieldBetOne.innerHTML = fieldBetNumeral

}



// keep for the future fieldBool = fieldBool ? false : true || toggle

function fieldBetter(){
	if(chipsBool10 === true){
		//add amount to count
		fieldBetNumeral = fieldBetNumeral + 10
        playerCount = playerCount - 10
        updatePlayerBank()
		
	}
	else if(chipsBool25 === true){
		fieldBetNumeral = fieldBetNumeral + 25
        playerCount = playerCount - 25
        updatePlayerBank()
		
	}
	else if(chipsBool50 === true){
		fieldBetNumeral = fieldBetNumeral + 50
        playerCount = playerCount - 50
        updatePlayerBank()
		
	}
	else if(chipsBool100 === true){
		fieldBetNumeral = fieldBetNumeral + 100
        playerCount = playerCount - 100
        updatePlayerBank()
		
	}
    
	chipFieldBet()
}

function fieldBetWinner(){

    // playerCount = playerCount + Math.floor(passbet*2)
        
  if(fieldBetBool == true){
        if([3,4,9,10,11].includes(combinedScore)){
                
                declared ="You've won on the field"
                playerCount = playerCount + Math.floor(fieldBetNumeral*2)
                playerBankUpdate()
                testCommentAdd()}
                
        else if([2,12].includes(combinedScore)){
                
                declared ="you'd win double or triple here"
                playerCount = playerCount + Math.floor(fieldBetNumeral*3) 
                playerBankUpdate()
                testCommentAdd()
        }

    
                
        else if([5,6,7,8].includes(combinedScore)){
            
            
            fieldBetNumeral = 0
            declared ="lost field bet"
            // minus fieldBet amount from playercount
            field.innerHTML = fieldBetNumeral
            
            playerBankUpdate()
            testCommentAdd()
            
        }


    }
}




function winning(){

    if(combinedScore === 4){
        playerCount = playerCount + Math.floor(/*bet amount*2*/passbet*2) 
        //need to update amount
        // winnings = math.floor * whatever won
        // add amount to winnings. 
        playerBankUpdate()
    } else if(combinedScore === 5){
        playerCount = playerCount + Math.floor(passbet*2.5)
        playerBankUpdate()
    } else if(combinedScore === 6){
        playerCount = playerCount + Math.floor(passbet*1.83)
        playerBankUpdate()
    } else if(combinedScore === 8){
        playerCount = playerCount + Math.floor(passbet*1.83)
        playerBankUpdate()
    } else if(combinedScore === 9){
        playerCount = playerCount + Math.floor(passbet*2.5)
        playerBankUpdate()
    } else if(combinedScore === 10){
        playerCount = playerCount + Math.floor(passbet*2)
        playerBankUpdate()
    }
   

}

let comeBetArray = []

function comeBetSelector(){

    if (comeBetBool == true && game === true){
    if(combinedScore === 4){
        comeBetFour.innerHTML = 'Comebet'
        comeBetArray.push()
    } else if(combinedScore === 5){
            comeBetFive.innerHTML = 'Comebet'
            comeBetArray.push(5)
    } else if(combinedScore === 6){
            comeBetSix.innerHTML = 'Comebet'
            comeBetArray.push(6)
    } else if(combinedScore === 8){
            comeBetEight.innerHTML = 'Comebet'
            comeBetArray.push(8)
    } else if(combinedScore === 9){
            comeBetNine.innerHTML = 'Comebet'
            comeBetArray.push(9)
    } else if(combinedScore === 10){
        comeBetTen.innerHTML = 'Comebet'
        comeBetArray.push(10)
        
    }  if(game === true){
        if([7].includes(combinedScore)){
            comeBar.innerHTML = "."
            comeBetBool = false
            
            declared = "you lose come bet"
            testCommentAdd()
            comeBetArray = []
            comeBetclear()
        }}
    } else if(game === false && comeBetBool === true){
        if([7, 11, 2, 3, 12].includes(combinedScore)){
            comeBar.innerHTML = "."
            comeBetBool = false
            
            declared = "you lose come bet"
            testCommentAdd()
            comeBetArray = []
            comeBetclear()
        }
    }
    else{
    comeBetBool = false}
}


function selected(){
    if(combinedScore === 4){
        fourPoint.innerHTML = "Point";
        
    } else if(combinedScore === 5){
        fivePoint.innerHTML = "Point"
        
    } else if(combinedScore === 6){
        sixPoint.innerHTML = "Point"
        
    } else if(combinedScore === 8){
        eightPoint.innerHTML = "Point"
        
    } else if(combinedScore === 9){
        ninePoint.innerHTML = "Point"
       
    } else if(combinedScore === 10){
        tenPoint.innerHTML = "Point"
       
        
    }
}


function comeBetWinner(){
    if(comeBetArray.includes(4,5,6,8,9,10)){
        
        declared = "Winner!"
        testCommentAdd()

    }
}

function clearPoint(){
    fourPoint.innerHTML = ""
    fivePoint.innerHTML = ""
    sixPoint.innerHTML = ""
    eightPoint.innerHTML = ""
    ninePoint.innerHTML = ""
    tenPoint.innerHTML = ""
    

}

function comeBetclear(){
    comeBetFour.innerHTML = ''
    comeBetFive.innerHTML = ''
    comeBetSix.innerHTML = ''
    comeBetEight.innerHTML = ''
    comeBetNine.innerHTML = ''
    comeBetTen.innerHTML = ''
}


function winningCounter(){
    if(win = true){
        winningCount++
        wins.innerHTML = ("Times won : " + winningCount )
    }
}

function loosesCounter(){
    if(lose = true){
        loosingCount++
        losses.innerHTML = ("Times lost : " + loosingCount )
    }
}
    

// variable for bet amounts - will test with multiple bets
var passbet = 0

var passLineBetAmount = document.querySelector('.passLineBet')

function resetPassbet(){
    passbet = 0
    chipCountUpdate()
}


// ************ DONT PASS BAR **************



var dontPassBar = document.getElementById('dontPassLowerBar')
var dontPassBarUp = document.getElementById('dontPassVerticalBar')
var dontPassBarImg = document.getElementById('dontPassBarImg')
let dontPassBarBet = document.querySelector("passLineBet")



dontPassVerticalBar.addEventListener('click', dontPass)
dontPassBar.addEventListener('click', dontPass)

var dontPassBool = false

// onclick function


function dontPass(){

	dontPassBool = true
	dontPassBarImg.src = flag

}

function dontPassGame(){

	if(dontPassBool === true && game === false){
		if([7, 11].includes(combinedScore)){
		declared = 'You lose on the dont come bar'
		testCommentAdd()
        
		dontPassBool = false

		} else if([2,3,12].includes(combinedScore)){
			declared = 'You win on the dont come bar'
			testCommentAdd()
			
			} 
		}
		if(dontPassBool === true && game === true){
			if(winningScore === combinedScore){
				declared = 'Dont come bar loss'
				testCommentAdd()
				dontPassBool = false
			} else if(combinedScore === 7){
				declared = 'Dont come bar win'
				testCommentAdd()
			}
		}
	}

// ************ DONT PASS BAR ABOVE **************



// ************ DONT COME BAR **************

let dontComeBar = document.querySelector('.dontComeBar')

var dontComeBarImg = document.getElementById('dontComeBarImg')

dontComeBar.addEventListener('click', imageDontCome)

function imageDontCome(){
	dontComeBarImg.src = flag
}



// ************ DONT COME BAR ^^ **************

// ************ 6 Big 8 **************

var sixBigEight = document.getElementById('sixBigEight')

var sixBigEightImg = document.getElementById('sixBigEightImg')


sixBigEight.addEventListener('click', sixBigEightImgF)

function sixBigEightImgF(){
	sixBigEightImg.src = flag
}


// ************ 6 Big 8 ^^ **************



// ************** PLACE BETS **************

let placeFour = document.getElementById('placeBetFour')
let placeFive = document.getElementById('placeBetFive')
let placeSix = document.getElementById('placeBetSix')
let placeEight = document.getElementById('placeBetEight')
let placeNine = document.getElementById('placeBetNine')
let placeTen = document.getElementById('placeBetTen')

let placeFourImg = document.getElementById('placeBetFourImg')
let placeFiveImg = document.getElementById('placeBetFiveImg')
let placeSixImg = document.getElementById('placeBetSixImg')
let placeEightImg = document.getElementById('placeBetEightImg')
let placeNineImg = document.getElementById('placeBetNineImg')
let placeTenImg = document.getElementById('placeBetTenImg')

var placeFourBool = false
var placeFiveBool = false
var placeSixBool = false
var placeEightBool = false
var placeNineBool = false
var placeTenBool = false



placeFour.addEventListener('click', placeBetsFour)
placeFive.addEventListener('click', placeBetsFive)
placeSix.addEventListener('click', placeBetsSix)
placeEight.addEventListener('click', placeBetsEight)
placeNine.addEventListener('click', placeBetsNine)
placeTen.addEventListener('click', placeBetsTen)

function placeBetsFour(){
	
	if(game === true){
		placeFourImg.src = flag
		placeFourBool = true
		
	} else if(game === false){
		
	}
}
function placeBetsFive(){
	
	if(game === true){
		placeFiveImg.src = flag
		placeFiveBool = true
		
	} else if(game === false){
		
	}
}
function placeBetsSix(){
	
	if(game === true){
		placeSixImg.src = flag
		placeSixBool = true
		
	} else if(game === false){
		
	}
}
function placeBetsEight(){
	
	if(game === true){
		placeEightImg.src = flag
		placeEightBool = true
		
	} else if(game === false){
		
	}
}
function placeBetsNine(){
	
	if(game === true){
		placeNineImg.src = flag
		placeNineBool = true
		
	} else if(game === false){
		
	}
}
function placeBetsTen(){
	
	if(game === true){
		placeTenImg.src = flag
		placeTenBool = true
		
	} else if(game === false){
		
	}
}


function clearPlacedBets(){
	placeFourImg.src = emptyImage
	placeFiveImg.src = emptyImage
	placeSixImg.src = emptyImage
	placeEightImg.src = emptyImage
	placeNineImg.src = emptyImage
	placeTenImg.src = emptyImage
	 placeFourBool = false
 	placeFiveBool = false
 	placeSixBool = false
	placeEightBool = false
	placeNineBool = false
	placeTenBool = false
}

// ************** PLACE BETS ^^ **************

// ************** HARD & PROP BETS ***********

/* bet should compare against roll


if it hits the number increase amount 
by amount(start with 2)

*/
// 
// *************** HARD & PROP BETS **********


// ************** PROP BETS **************

var sevenProp = document.querySelector('.seven')
var sixProp = document.querySelector('.hardSix')
var tenProp = document.querySelector('.hardTen')
var eightProp = document.querySelector('.hardEight')
var fourProp = document.querySelector('.hardFour')
var threeProp = document.querySelector('.three')
var twoProp = document.querySelector('.two')
var twelveProp = document.querySelector('.twelve')
var elevenProp = document.querySelector('.elevenP')
var elevenPTwo = document.querySelector('.elevenPTwo')
var anyCrapsProp = document.querySelector('.anyCraps')


var sevenImg = document.getElementById('sevenImg')
var hardSixImg = document.getElementById('hardSixImg')
var hardTenImg = document.getElementById('hardTenImg')
var hardEightImg = document.getElementById('hardEightImg')
var hardFourImg = document.getElementById('hardFourImg')
var threeImg = document.getElementById('threeImg')
var twoImg = document.getElementById('twoImg')
var twelveImg = document.getElementById('twelveImg')
var elevenPImg = document.getElementById('elevenPImg')
var elevenPImgTwo = document.getElementById('elevenPImgTwo')
var anyCrapsImg = document.getElementById('anyCrapsImg')


sevenProp.addEventListener('click', hardSevenImgA)
sixProp.addEventListener('click', hardSixImgA)
tenProp.addEventListener('click', hardTenImgA)
eightProp.addEventListener('click', hardEightImgA)
threeProp.addEventListener('click', threeImgA)
fourProp.addEventListener('click', hardFourImgA)
twoProp.addEventListener('click', twoImgA)
twelveProp.addEventListener('click', twelveImgA)
elevenProp.addEventListener('click', elevenPImgA)
elevenPTwo.addEventListener('click', elevenPTwoA)

anyCrapsProp.addEventListener('click', anyCrapsA)



function hardSevenImgA(){
	sevenImg.src = flag
}

function hardSixImgA(){
	hardSixImg.src = flag
}

function hardTenImgA(){
	hardTenImg.src = flag
}
function hardEightImgA(){
	hardEightImg.src = flag
}
function hardFourImgA(){
	hardFourImg.src = flag
}

function threeImgA(){
	threeImg.src = flag
}

function twoImgA(){
	twoImg.src = flag
}
function twelveImgA(){
	twelveImg.src = flag
}
function elevenPImgA(){
	elevenPImg.src = flag
}
function elevenPTwoA(){
	elevenPImgTwo.src = flag
}
function anyCrapsA(){
	anyCrapsImg.src = flag
}





// ************** PROP BETS **************







function updatePlayerCount(){
    playerBank.innerHTML = playerCount
}



function chipCountUpdate(){

    passLineBetAmount.innerHTML = passbet

}

function chipCountClear(){
    
    startCount = 0
    passbet = 0
    chipCount.innerHTML = startCount
    
}


betClear.addEventListener('click', chipCountClear)




leftDiceNum = document.querySelector('.leftDiceNum')
rightDiceNum = document.querySelector('.rightDiceNum')


dice = document.querySelector('.dice')

dice.addEventListener('click', updateDice)





function updateDice(){

    roll = Math.floor(Math.random()*6) + 1
    rollTwo = Math.floor(Math.random()*6) + 1
    rightDiceNum.innerHTML = roll
    leftDiceNum.innerHTML = rollTwo

    combinedScore = roll + rollTwo

    
    declared = `${"Dice roll : " + combinedScore}`
    testCommentAdd()
    comeBetSelector()
    comeBetWinner()
    fieldBetWinner()
	dontPassGame()
    


    
    
    if(game === false){
        if([7, 11].includes(combinedScore)){
            
           //updates playerCount with win amount
            
            playerBankUpdate()
        
        declared = `${"Passline win!"}`
        testCommentAdd()
        winningCounter()
        
        chipCountUpdate()
        
		game = false
        
        }
        else if([4, 5, 6, 8, 9, 10].includes(combinedScore)){
            	
				game = true
            	selected()
                score = combinedScore
                winningScore = score
                
                declared = `${"Point is : " + combinedScore}`
                testCommentAdd()
                
            
        }  else if ([2, 3, 12].includes(combinedScore)){
            
            game = false
            lose = true
            declared = `${"you lose"}`
            passLine = false
			passbet = 0
            // update passbar
            testCommentAdd()
            loosesCounter()
            chipCountClear()
            resetPassbet()
            chipCountUpdate()
        } 
    } else if(game == true){
        if(winningScore === combinedScore){
           
			game = false
            
            winning()
            
            clearPoint()
            
                
                declared = `${"Point hit, you win!"}`
                testCommentAdd()
                win = true
                passLine = false
                winningCounter()
                passLineClear()
                
        } 
        else if (combinedScore == 7){
            game = false
            lose = true
            passLine = false
			// clearing placedbets function
			clearPlacedBets()
			// 
            
            declared = `${"7 out!"}`
			passbet = 0
            testCommentAdd()
            clearPoint()
            loosesCounter()
            chipCountClear()
            resetPassbet()
        }
        else{
            
        }
    }
    
    

    
    }

   

/*




google.charts.load('current',{packages:['corechart', "corechart"]});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['ComputerThrows', 'Iterations' ],
        ['Wins', winningCount],
        ['Losses', loosingCount],
        ["Set", 0]
        
      ]);

      var data2 = google.visualization.arrayToDataTable([
        ['ComputerThrows', 'iterations'],
        ['Wins', 1000],
        ['Losses', 5000],
        ["Set", 0]
        
      ]);
      var options = {
        title: 'Computer Generated Wins vs Losses'
      }; 
      var optionsTwo = {
        title: 'Human Generated Wins vs Losses',
        is3D: true
      };
      
      var chart = new google.visualization.BarChart(document.getElementById('myChart'));
      var chartTwo = new google.visualization.PieChart(document.getElementById('myChartTwo'));
      chart.draw(data, options);
      chartTwo.draw(data2, optionsTwo);
      
      }




/*
let buttonTenClicker = document.getElementById("runFunction")

buttonTenClicker.addEventListener('click', go)


function go(){
    console.log("Loop has begun")
    for( var n = 0; n < 1000; n++){
        updateDice()
        
    }
    
    drawChart()
   
}

  */



/* 


THINGS TO DO

1. PASSLINE BETS - NEED THEM ATTACHED TO INV BETS
2. MATH BEHIND BETS
6 FINALIZE COME BETS
4. bets update to passline bet amount and doesnt carry its own value. 
- field bet is bugged
5. fix the player bank
6. clear bets doesnt work

*/ 



 



    



