let container = document.querySelector('.container')
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let timeout = document.querySelector('.timeout')
let timmer = document.querySelector('.timmer')
let button = document.querySelector('.btn')

win.classList.add('hide')
lose.classList.add('hide')
timeout.classList.add('hide')
timmer.classList.add('hide')

let color = ['red', 'blue', 'green', 'cadetblue', 'purple', 'brown', 'chocolate', 'aqua','deeppink'];
let shape = ['circle', 'square', 'oval','rectangle','diamond']

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

function start(){
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
        timmer.innerHTML = `Timmer: ${Timer}`
        if(currentTime >= TimeOut){
            timeout.classList.remove('hide')
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
    
        if (targetColor && targetShape) {
            if (!firstDivColorClass && !firstDivShape) {
                 firstDivColorClass = targetColor;
                firstDivShape = targetShape;
            }
            else if (!secondDivColorClass && !secondDivShape) {
                secondDivColorClass = targetColor;
                secondDivShape = targetShape;
    
                if ((firstDivColorClass === secondDivColorClass) && (firstDivShape === secondDivShape)) {
                            // alert('Congratulation win')
                            win.classList.remove('hide')
                            lose.classList.add('hide')
                            timeout.classList.add('hide')
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
                            isStarted = false; // Stop game logic
                            button.disabled = false;
                            button.innerText = "Restart"
                            clearInterval(x); // Stop timer
                        }
    
                        firstDivColorClass = "";
                        secondDivColorClass = "";
                        firstDivShape = "";
                        secondDivShape = "";
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