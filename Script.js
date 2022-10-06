

// Definitions

let dontComeBar = document.querySelector('.dontComeBar')
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
 

    chipsBool10 = false,
    chipsBool25 = false, 
    chipsBool50 = false, 
    chipsBool100 = false



var fieldImg = document.getElementById("fieldImg")
var comeBarImg = document.getElementById('comeBarImg')


let flag = "./emoji_flags_FILL0_wght400_GRAD0_opsz48 (1).png"

 

chips10.addEventListener('click', ()=>{
    chips10.style.backgroundColor = colors[index];
    chips10.style.color = textColors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
    indexColors = indexColors >= textColors.length - 1 ? 0 : indexColors + 1;
    chipsBool10 = !chipsBool10
    console.log(chipsBool10)

	
    
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
	}
	else if(chipsBool25 === true){
		passbet = passbet + 25
	}
	else if(chipsBool50 === true){
		passbet = passbet + 50
	}
	else if(chipsBool100 === true){
		passbet = passbet + 100
	}
    
	chipCountUpdate()

}

let fieldBetOne = document.querySelector('.fieldBet')

let fieldBetNumeral = 0


function fieldBetter(){
	if(chipsBool10 === true){
		//add amount to count
		fieldBetNumeral = fieldBetNumeral + 10
	}
	else if(chipsBool25 === true){
		fieldBetNumeral = fieldBetNumeral + 25
	}
	else if(chipsBool50 === true){
		fieldBetNumeral = fieldBetNumeral + 50
	}
	else if(chipsBool100 === true){
		fieldBetNumeral = fieldBetNumeral + 100
	}
    
	chipFieldBet()
}


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

let redChipValue = 10
let startCount =  Math.floor(0)

let chipCount = document.querySelector('.chipCount')

let betClear = document.getElementById("clearBets")


let playerCount = 0
let playerCounter = document.querySelector('.playerCount')


game = false
win = false
comeBetBool = false
fieldBool = false

comeBet.addEventListener('click', ()=> {
    
    if(game === true){
        comeBetBool = true
        console.log(comeBetBool)
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
    passlineImg.src = flag
	betChecker()

}

function passLineClear(){

    if(passLine === false){
        passlineImg.src = emptyImage
    }
}





passLine.addEventListener('click', passLineBet)
passLineUp.addEventListener('click', passLineBet)




field.addEventListener('click', fieldBet)

function fieldBet(){ 

    fieldImg.src = flag
    fieldBool = true
	fieldBetter()
	chipFieldBet()

}


function fieldBetWinner(){
    if(fieldBool === true){
        
  
        if([3,4,9,10,11].includes(combinedScore)){
                console.log("You've won on the field")
                declared ="You've won on the field"
                testCommentAdd()}
                
        else if([2,12].includes(combinedScore)){
                console.log("you'd win double or triple here")
                declared ="you'd win double or triple here"
                testCommentAdd()
        }

    
                
        else if([5,6,7,8].includes(combinedScore)){
            fieldBool = false
            console.log("lost field bet")
            declared ="lost field bet"
            testCommentAdd()
            field.innerHTML = ''
        }


    }
}



function winning(){

    if(combinedScore === 4){
        playerCount = Math.floor(playerCount*2)
    } else if(combinedScore === 5){
        playerCount = Math.floor(playerCount*2.5)
    } else if(combinedScore === 6){
        playerCount = Math.floor(playerCount*1.83)
    } else if(combinedScore === 8){
        playerCount = Math.floor(playerCount*1.83)
    } else if(combinedScore === 9){
        playerCount = Math.floor(playerCount*2.5)
    } else if(combinedScore === 10){
        playerCount = Math.floor(playerCount*2)
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
            console.log("you lose come bet")
            declared = "you lose come bet"
            testCommentAdd()
            comeBetArray = []
            comeBetclear()
        }}
    } else if(game === false && comeBetBool === true){
        if([7, 11, 2, 3, 12].includes(combinedScore)){
            comeBar.innerHTML = "."
            comeBetBool = false
            console.log("you lose come bet")
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
        console.log("Winner!")
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

function betAmount(){
	// add bet amount based on how much is being bet
	// if won - add to winnings based on amount won

	


}



function updatePlayerCount(){
    playerCounter.innerHTML = playerCount
}

function chipFieldBet(){
	fieldBetOne.innerHTML = fieldBetNumeral
}


function chipCountUpdate(){

    passLineBetAmount.innerHTML = passbet

}

function chipCountClear(){
    
    startCount = 0
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

    console.log("combined score", combinedScore)
    declared = `${"Dice roll : " + combinedScore}`
    testCommentAdd()
    comeBetSelector()
    comeBetWinner()
    fieldBetWinner()
    


    
    
    if(game == false){
        if([7, 11].includes(combinedScore)){
            playerCount = startCount*2/2
            updatePlayerCount()
            console.log(playerCount)
        console.log("You win!")
        declared = `${"Passline win!"}`
        testCommentAdd()
        winningCounter()
        passLineClear()
		game = false
        }

        else if([4, 5, 6, 8, 9, 10].includes(combinedScore)){
            game = true
            
            selected()
                score = combinedScore
                winningScore = score
                console.log("point is :", combinedScore)
                declared = `${"Point is : " + combinedScore}`
                testCommentAdd()
                
            
        }  else if ([2, 3, 12].includes(combinedScore)){
            console.log("you lose")
            game = false
            lose = true
            declared = `${"you lose"}`
            passLine = false
			passbet = 0
            testCommentAdd()
            loosesCounter()
            chipCountClear()
            passLineClear()
        } 
    } else if(game == true){
        if(winningScore === combinedScore){
            playerCount = startCount*2/2
            updatePlayerCount()
            winning()
            updatePlayerCount()
            clearPoint()
            console.log(playerCount)
                console.log("You win!")
                declared = `${"Point hit, you win!"}`
                testCommentAdd()
                game = false
                win = true
                passLine = false
                winningCounter()
                passLineClear()
                
        } 
        else if (combinedScore == 7){
            game = false
            lose = true
            passLine = false
            console.log("you've lost")
            declared = `${"7 out!"}`
			passbet = 0
            testCommentAdd()
            clearPoint()
            loosesCounter()
            chipCountClear()
            passLineClear()
        }
        else{
            console.log("We're still playing.")
        }
    }
    
    

    
    }

   

/*

1. dont pass bar/done come bar

bets need to add to value - only one value can be changed at a time

2. prop bets
3. come bets
4. field bets completed - need math
5. stats on different types of bets number of wins with 4, 5, 6, 7
6. place bets
7. hedge bet on passline



*/

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
3. PLACE BETS
4. PROP BETS
5. DONT PASS BAR
6 FINALIZE COME BETS


*/ 



 



    


