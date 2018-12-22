let suits=['Spades','Hearts','Clover','Diamonds'];
let values=['Ace','King','Jack','Queen',
'Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];

let paragraph=document.getElementById("para");
let newgame=document.getElementById("newgame");
let stay=document.getElementById("stay");
let hit=document.getElementById("hit");
let rules=document.getElementById("rules");

let gameStarted=false,
    gameOver=false,
    playerWon=false,
    dealerCards=[],
    playerCards=[],
    dealerScore=0,
    playerScore=0,
    deck=[];
showStatus();

stay.style.display="none";
hit.style.display="none";



newgame.addEventListener("click",function(){
        gameStarted=true;    
         gameOver=false;
         playerWon=false;

    deck=createDeck();
    shuffleDeck(deck);
    dealerCards=[getNextCard(),getNextCard()];
    playerCards=[getNextCard(),getNextCard()];
    
    
    
    newgame.style.display="none";
    rules.style.display="none";
    stay.style.display="inline";
    hit.style.display="inline";
    showStatus();



});
function createDeck(){
      let deck=[];
    for(let signIdx=0;signIdx<suits.length;signIdx++){

      for(let numbersIdx=0;numbersIdx<values.length;numbersIdx++){
       let card={
              suit:suits[signIdx],
              value:values[numbersIdx]
      };
       deck.push(card);
      }
    }
      return deck;
}

function shuffleDeck(deck){
    for(let i=0;i<deck.length;i++)
    {
        let swapIdx=Math.trunc(Math.random()*deck.length);
        let tmp=deck[swapIdx];
        deck[swapIdx]=deck[i];
        deck[i]=tmp;
        
    }
}


rules.addEventListener("click",function(){
  //  rules.innerText="Visit the following website for rules you dumb //https://wizardofodds.com/games/blackjack/basics/";

});

hit.addEventListener("click",function(){
playerCards.push(getNextCard());
ifGameEnd();
showStatus();
});

stay.addEventListener("click",function(){
gameOver=true;
ifGameEnd();
showStatus();

});
function getCardString(card){
    return card.value + " of " + card.suit;
}

function getNextCard(){
    return deck.shift();
}


function showStatus(){
    if(!gameStarted){
        paragraph.innerText="Welcome, Press New Game if you know how to play !";
        return;
    }


    let dealercardString=" ";
    for(let i=0;i<dealerCards.length;i++)
    {
        dealercardString+=getCardString(dealerCards[i])+"\n";
    }

    let playercardString=" ";
     for(let i=0;i<playerCards.length;i++)
    {
        playercardString+=getCardString(playerCards[i])+"\n";
    }
  
  updateScores();
  paragraph.innerText=


  "Dealer has:\n"+
  dealercardString+
  "(Score:"+dealerScore+")\n\n"+

   "player has:\n"+
  playercardString+
  "(Score:"+playerScore+")\n\n";

 if(gameOver){
     if(playerWon){
         paragraph.innerText+="YOU WIN !";

     }
     else{
     paragraph.innerText+="DEALER WINS !";
 }  
    newgame.style.display="inline";
    rules.style.display="inline";
    stay.style.display="none";
    hit.style.display="none";


 }
}

function getScore(cardArray){
   let score=0;
   let hasAce=false;
   for(let i=0;i<cardArray.length;i++){
       let card=cardArray[i];
       score+=getCardNumericValue(card);
       if(card.value==="Ace"){
           hasAce=true;        
       }
   }
   if(hasAce&&score+10<=21){
       return score+10;
   }
        return score;
}



function updateScores(){
   dealerScore= getScore(dealerCards);
   playerScore=getScore(playerCards);
}


// let deck=createDeck();
// let playerCards=[getNextCard(),getNextCard()];

// console.log("Welcome to BlackJack");
// console.log("You are dealt: ");
// console.log(" "+ getCardString(playerCards[0]));
// console.log(" "+getCardString(playerCards[1]));


function getCardNumericValue(card){
    switch(card.value){
        case "Ace":
        return 1;
        break;

        case "Two":
        return 2;      
        break;

        case "Three":
        return 3;
        break;

        case "Four":
        return 4;
        break;

        case "Five":
        return 5;
        break;

        case "Six":
        return 6;
        break;

        case "Seven":
        return 7;
        break;

        case "Eight":
        return 8;
        break;

        case "Nine":
        return 9;
        break;

        default:
        return 10;
        break;
        
    }
}

//I am doing this for the AI's turn to play 
function ifGameEnd(){
    updateScores();
    if(gameOver){
        while(dealerScore<playerScore
        && playerScore<21
        && dealerScore<21){
            dealerCards.push(getNextCard());
            updateScores();
        }
    }
    if(playerScore===21){
        playerWon=true;
        gameOver=true;
    }
    else if(dealerScore===21){
        playerWon=false;
        gameOver=true;
    }
    if(playerScore>21){
        playerWon=false;
        gameOver=true;
    }
    else if(dealerScore>21){
        playerWon=true;
        gameOver=true;
    }
    else if(gameOver){
        if(playerScore>dealerScore||playerScore===dealerScore){
            playerWon=true;
        }
        else{
            playerWon=false;
        }
    }
}







