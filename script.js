let container = document.querySelector('.container')
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let timeout = document.querySelector('.timeout')
let timmer = document.querySelector('.timmer')
let button = document.querySelector('.btn')
let msg = document.querySelectorAll('.msg')

let winscore = document.querySelector('.winscore')
let losescore = document.querySelector('.losescore')
let timeoutscore = document.querySelector('.timeoutscore')

win.classList.add('hide')
lose.classList.add('hide')
timeout.classList.add('hide')
timmer.classList.add('hide')

let color = ['red', 'blue', 'green', 'cadetblue', 'purple', 'brown', 'chocolate', 'aqua','deeppink'];
let shape = ['circle', 'square', 'oval','rectangle','diamond']

let timeoutMsg = [
                    "Bhai, waqt toh bhaag gaya, tu bas soch raha tha!",
                    "Yeh kya scene hai? Time tha, tum the, par match kahan gaya?",
                    "Arre, time ko bhi yeh game khelne ka mann nahi tha!",
                    "Timer ne toh yeh game jeet li, tu bas soch raha tha!",
                    "Aise na karo yaar, time ki toh izzat karo!",
]

let winMsg = [
                "Oho! Tum toh match-making ke expert nikle!",
                "Shape aur rang match hone ke baad tumne apni zindagi ka match jeet liya!",
                "Dekh ke match kiya? Ya phir aankhein band kar ke jeet li?",
                "Agar yeh jeet ek competition hota, tum toh champion ho!",
                "Jeet gaye! Ab toh tumhare liye shapes aur rang bhi apne ho gaye!",
]

let loseMsg = [
                "Arre! Shape ko dekh ke laga ki jeet jaoge, par time ne dhoka de diya!",
                "Yaar, tumne match karne ki planning toh ki thi, par timing ka pata nahi tha!",
                "Aaj phir tumne time ko miss kar diya, warna yeh jeet tumhari thi!",
                "Shape aur rang toh the, bas luck ko tumne miss kar diya!",
                "Match toh bhool gaye, aur time bhi!",
]



for (let i = 0; i < 30; i++) {
    let randomClass = Math.floor(Math.random() * (color.length))
    let randomShape = Math.floor(Math.random() * (shape.length))

    let newDiv = document.createElement('div')
    newDiv.classList.add(color[randomClass])
    newDiv.setAttribute('data-shape', shape[randomShape])
    container.append(newDiv)
}

let firstDivColorClass;
let secondDivColorClass;
let firstDivShape;
let secondDivShape;
let isStarted;
let x;   

let randomTimeoutMsg;
let randomWinLose;

let scoreState = {
    win:0,
    lose:0,
    timeout:0
}       

function start(){
    let allShapes = document.querySelectorAll('.container div')
    allShapes.forEach((elem)=>{elem.classList.remove('selected')})
    randomTimeoutMsg = Math.floor(Math.random() * (timeoutMsg.length))
    randomWinLose = Math.floor(Math.random() * (winMsg.length))
     isStarted = true;
     win.classList.add('hide')
     lose.classList.add('hide')
     timeout.classList.add('hide')

    let TimeOut = Date.now() + 3000;
    let Timer = 0;
    timmer.classList.remove('hide')
    timmer.innerHTML = `Timmer: ${Timer}`
    button.disabled = true;
     x =  setInterval(()=>{
        const currentTime = Date.now();
        Timer++;
        timmer.innerHTML = `Timmer: ${Timer}`;
        if(currentTime >= TimeOut){
            msg[2].innerText = timeoutMsg[randomTimeoutMsg];
            timeout.classList.remove('hide')
            scoreState.timeout++;
            timeoutscore.innerHTML = `<b>Timeout: </b> ${scoreState.timeout}`
            isStarted = false;
            button.disabled = false;
            button.innerText = "Restart"
            clearInterval(x);
        }
    },1000)
}
    
container.addEventListener('click', (e) => {
    if(isStarted){
    if (!e.target.classList.contains('container')) {
        
        let targetColor = e.target.classList[0]
        let targetShape = e.target.dataset.shape

        if(!e.target.classList.contains('selected')){
            if (targetColor && targetShape) {
                
                if (!firstDivColorClass && !firstDivShape) {
                    firstDivColorClass = targetColor;
                    firstDivShape = targetShape;
                    e.target.classList.add('selected')   
                }
                else if (!secondDivColorClass && !secondDivShape) {
                    secondDivColorClass = targetColor;
                    secondDivShape = targetShape;
        
                    if ((firstDivColorClass === secondDivColorClass) && (firstDivShape === secondDivShape)) {
                                win.classList.remove('hide')
                                lose.classList.add('hide')
                                timeout.classList.add('hide')
                                msg[0].innerText = winMsg[randomWinLose];
                                scoreState.win++;
                                winscore.innerHTML = `<b>Win: </b> ${scoreState.win}`
                                isStarted = false;
                                button.disabled = false;
                                button.innerText = "Restart"
                                clearInterval(x);
                            }
                            else{
                                // alert('Bettrt luck!, Try Next time')
                                lose.classList.remove('hide')
                                win.classList.add('hide')
                                timeout.classList.add('hide')
                                msg[1].innerText = loseMsg[randomWinLose];
                                scoreState.lose++;
                                losescore.innerHTML = `<b>Loose: </b> ${scoreState.lose}`
                                isStarted = false; // Stop game logic
                                button.disabled = false;
                                button.innerText = "Restart"
                                clearInterval(x); // Stop timer
                            }
        
                            firstDivColorClass = "";
                            secondDivColorClass = "";
                            firstDivShape = "";
                            secondDivShape = "";
                            console.log(scoreState)
                }
            }
        }
    }
}
})




// let container = document.querySelector('.container')

// let color = ['red', 'blue', 'green', 'cadetblue', 'purple', 'brown', 'chocolate', 'aqua','deeppink'];
// let shape = ['circle', 'square', 'oval','rectangle','diamond']

// for (let i = 0; i < 30; i++) {

//     let randomClass = Math.floor(Math.random() * (color.length))
//     let randomShape = Math.floor(Math.random() * (shape.length))

//     let newDiv = document.createElement('div')
//     newDiv.classList.add(color[randomClass], shape[randomShape])
//     container.append(newDiv)

// }

// let firstDivColorClass;
// let secondDivColorClass;
// let firstDivShape;
// let secondDivShape;

// container.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('container')) {
        
//         let targetColor;
//         let targetShape;

//         color.forEach((color)=>{
//             Array.from(e.target.classList).forEach((classes)=>{
//                 if(classes == color){
//                     targetColor = color
//                 }
//             })
//         })

//         shape.forEach((shape)=>{
//             Array.from(e.target.classList).forEach((classes)=>{
//                 if(classes == shape){
//                     targetShape = shape
//                 }
//             })
//         })

//         if (targetColor && targetShape) {
//             if (!firstDivColorClass && !firstDivShape) {
//                 firstDivColorClass = targetColor;
//                 firstDivShape = targetShape;
//             }
//             else if (!secondDivColorClass && !secondDivShape) {
//                 secondDivColorClass = targetColor;
//                 secondDivShape = targetShape;

//                 if ((firstDivColorClass === secondDivColorClass) && (firstDivShape === secondDivShape)) {
//                     alert('Congratulation win')
//                 }
//                 else{
//                     alert('Bettrt luck!, Try Next time')
//                 }

//                 console.log(firstDivColorClass)
//                 console.log(secondDivColorClass)
//                 console.log(firstDivShape)
//                 console.log(secondDivShape)
//                 console.log('--------------------------------------')

//                 firstDivColorClass = "";
//                 secondDivColorClass = "";
//                 firstDivShape = "";
//                 secondDivShape = "";
//             }
//         }
//     }
// })