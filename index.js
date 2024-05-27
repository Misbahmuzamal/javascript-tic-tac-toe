let boxes=document.querySelectorAll('.box');
let game=document.querySelector('.game');
let restart=document.querySelector('.restart');
let msgContainer=document.querySelector('.mesgcontainer');
let message=document.querySelector('.msg');
let newGame=document.querySelector('.newgame');
console.log(newGame)
let turnO=true;
let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
boxes.forEach(function(box){
    box.addEventListener('click',function(){
       if(turnO){
        box.innerHTML='O';
        turnO=false;
        console.log("hello world")
       }
       else{
        box.innerHTML='X';
        turnO=true;
      
       }
       box.disabled = true;
       checkWinner()
    })
})
function checkWinner() {
   for (const pattern of winnerPattern) {
     let firstvalue=boxes[pattern[0]].innerHTML;
     let secondvalue=boxes[pattern[1]].innerHTML;
     let thirdvalue=boxes[pattern[2]].innerHTML;
     if(firstvalue!=='' && secondvalue!=='' && thirdvalue!==''){
        if(firstvalue==secondvalue && secondvalue==thirdvalue){
            console.log("winner")
            for (const box of boxes) {
                box.disabled=true;
            }
            showWinner(firstvalue)
            return;
        }
        
     }
    
   }
   
}
function showWinner(winner) {
    message.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove('hide');
    
}
function restartGame(){
    for (const box of boxes) {
        box.disabled=false;
        box.innerHTML='';
    }
    msgContainer.classList.add('hide')
}
restart.addEventListener('click',restartGame)
newGame.addEventListener('click',restartGame)