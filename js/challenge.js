// Setting up the timer
const counter = document.getElementById('counter')

let time = 0
let motion

function startTimer() {
    function incrementTime() {
        time += 1
    }
    motion = setInterval(incrementTime, 1000)
}
function changingCounter() {
    function updateText () {
        counter.innerText = time
    }
    setInterval(updateText, 1000)
}
startTimer()
changingCounter()


// Setting up the pause button
const pauseBtn = document.querySelector('#pause')
pauseBtn.addEventListener('click', changeTimer)

function pauseTimer() {
    clearInterval(motion)
    motion = null
}

function changeTimer() {
    if (motion) {
        pauseBtn.innerText = 'resume'
        pauseTimer()
    } else {
        pauseBtn.innerText = 'pause'
        startTimer()
    }
}


// The plus button
const plusBtn = document.querySelector('#plus')
function addTime() {
    time += 1
}
plusBtn.addEventListener('click', addTime)

// The minus button
const minusBtn = document.querySelector('#minus')
function subtractTime() {
    time -= 1
}
minusBtn.addEventListener('click', subtractTime)



//The heart button

const heartBtn = document.querySelector('#heart')
heartBtn.addEventListener('click', likeAMoment)

function likeAMoment() {
    let h5 = document.createElement('h5')
    h5.innerText = 'You sent a <3 at ' + time
    document.querySelector('ul.likes').appendChild(h5)
}


// Setting up the comment button

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        createComment(e.target['comment-input'].value)
        form.reset()
})
})


function createComment(commentText) {
    let h5 = document.createElement('h5')
    h5.innerText = commentText
    document.querySelector('#comment-form').appendChild(h5)
}
