let gameSeq= [];
let userSeq= []; 


let btns = ["yellow ", "red ", "purple" , "green"];

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("click", function(){
      if(started == false){
            console.log("game is started");
            started = true ;
      }
       levelup();
});

 
 function levelup(){
      userSeq = [];
      level++;

      h2.innerText= `Level ${level}`;
       let randI= Math.floor(Math.random()*3);
       let randC= btns[randI];
       let randB = document.querySelector(`.${randC}`);
      
       gameSeq.push(randC);
       console.log(gameSeq);
      gameflash(randB);
 }

 function gameflash(btn){
      btn.classList.add("gameflash");
       setTimeout(function(){
           btn.classList.remove("gameflash");
       },250);
 }

 function userflash(btn){
      btn.classList.add("userflash");
       setTimeout(function(){
           btn.classList.remove("userflash");
       },250);
 }

 function btnpress(){

      let btn = this ;
      userflash(btn);

      usercolor= btn.getAttribute("id");
      userSeq.push(usercolor);

      checkAns(userSeq.length);
 }

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
      btn.addEventListener("click", btnpress);
 }

function checkAns(idx){

        if( userSeq[idx] === gameSeq[idx]){
            if(userSeq.length == gameSeq.length){
               setTimeout(levelup, 1000);
            }
      } else{
            document.querySelector("h3");
            h3.innerHTML = `GAME OVER ! YOUR SCORE <b> ${level}</b> Press any key to start.`;
            document.querySelector("body").style.backgroundColor ="red";
            setTimeout(function (){
                  document.querySelector("body").style.backgroundColor="white";
            }, 150);
            reset ();
            
      }

}

function reset(){
       started = false ;
       gameSeq = []; 
       userSeq = [];
       level = 0;
}