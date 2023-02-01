
const array=['rock','paper','scissor']
// const img=['/home/ashish-kumar/Desktop/CGIP/MERN STACK/Rock-Paper-Scissor/images/17911 1.jpg']
let pcChoice= array[Math.floor(Math.random() * 3)];
console.log(pcChoice);

let score=0;
let result=""
function rock(){
    if(pcChoice==='paper'){
        result=" Lost"
        score
        document.querySelector('#point').innerHTML=score
    }else if(pcChoice==='scissor'){
        result=" Win"
        score++;
        document.querySelector('#point').innerHTML=score
    }else{
        result="Tie"
        document.querySelector('#point').innerHTML=score
    }
    document.querySelector('.second').innerHTML=  `<div class="second">
    <div>
     <div style="margin-bottom:20px; font: size 10px;">YOU PICKED</div>
     <button class="style style2 rock win-border" style="cursor: default; box-shadow: none;"><img src="./images/rock.jpg" alt=""></button>
 </div>
 <div>
     <div class="who-win">${result}</div>
     <div class="who-win" style="font-size: 25px;">AGAINST PC</div>
     <a href="./index.html">
     <button class="try-again" onclick="playAgain()">PLAY AGAIN</button>
     </a>
 </div>
 <div>
     <div style="margin-bottom:20px; font-size:10px">PC PICKED</div>
     <button class="style style2 ${pcChoice}" style="cursor: default; box-shadow: none;"><img src="./images/${pcChoice}.jpg" alt=""></button>
 </div>

 </div>`
}

function paper(){
    if(pcChoice==='paper'){
        result=" Tie"
        score
        document.querySelector('#point').innerHTML=score
    }else if(pcChoice==='scissor'){
        result=" Lost"
        score;
        document.querySelector('#point').innerHTML=score
    }else{
        result="Win"
        score++;
        document.querySelector('#point').innerHTML=score
    }
    document.querySelector('.second').innerHTML=`<div class="second">
    <div>
     <div style="margin-bottom:20px; font: size 10px;">YOU PICKED</div>
     <button class="style style2 paper win-border" style="cursor: default; box-shadow: none;"><img src="./images/paper.jpg" alt=""></button>
 </div>
 <div>
     <div class="who-win">${result}</div>
     <div class="who-win" style="font-size: 25px;">AGAINST PC</div>
     <a href="./index.html">
     <button class="try-again" onclick="playAgain()">PLAY AGAIN</button>
     </a>
 </div>
 <div>
     <div style="margin-bottom:20px; font-size:10px">PC PICKED</div>
     <button class="style style2 ${pcChoice}" style="cursor: default; box-shadow: none;"><img src="./images/${pcChoice}.jpg" alt=""></button>
 </div>

 </div>`
}


function scissor(){
    if(pcChoice==='paper'){
        result=" Win"
        score++
        document.querySelector('#point').innerHTML=score
    } else  if(pcChoice==='scissor'){
    result=" Tie"
        score;
        document.querySelector('#point').innerHTML=score
    }else{
        result="Lost"
        document.querySelector('#point').innerHTML=score
    }
    document.querySelector('.second').innerHTML=`<div class="second">
    <div>
     <div style="margin-bottom:20px; font: size 10px;">YOU PICKED</div>
     <button class="style style2 scissor win-border" style="cursor: default; box-shadow: none;"><img src="./images/scissor.jpg" alt=""></button>
 </div>
 <div>
     <div class="who-win">${result}</div>
     <div class="who-win" style="font-size: 25px;">AGAINST PC</div>
     <a href="./index.html">
     <button class="try-again" onclick="playAgain()">PLAY AGAIN</button>
     </a>
 </div>
 <div>
     <div style="margin-bottom:20px; font-size:10px">PC PICKED</div>
     <button class="style style2 ${pcChoice}" style="cursor: default; box-shadow: none;"><img src="./images/${pcChoice}.jpg" alt=""></button>
 </div>

 </div>`
}





























