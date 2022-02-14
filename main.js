//get teclas 
const keys = document.querySelectorAll(".key") 

// play notas
function playNote(event) {
    //console.log(event.target.dataset.key) ->event.keyCode
    
    // key code codigo da tecla
    let audioKeyCode = getKeyCode(event);

    // type key qual tecla pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return;
    }
    
    addPlayingClass(key)
    // play audio
    playAudio(audioKeyCode)
}

// add cor a tecla pressionda
function addPlayingClass (key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown" // true or false
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`) 
    audio.currentTime = 0;
    audio.play()  
}

// removendo a trasição/cor das teclas pressionadas
function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
// click mouse
// forEach -> Para cade tecla pressionada
    keys.forEach( function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // keyboard type
    window.addEventListener("keydown", playNote)
}
// click teclado
// EventListener é um escutador de eventos

window.addEventListener("load", registerEvents)