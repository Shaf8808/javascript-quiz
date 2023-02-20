const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const title = document.getElementById('heading')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const homeButton = document.getElementById('home-btn')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
homeButton.addEventListener('click', function () {
    location.href = "index.html"
})

// User form section

const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');


function startGame() {
    console.log('Started')
    userSectionRef.classList.add('hide')
    startButton.classList.add('hide')
    homeButton.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random( - .5))
    currentQuestionIndex = 0
    title.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()

}


function setNextQuestion() {
    resetQuestions()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetQuestions() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    },
    {
        question: 'What is 2 + 5',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    },
    {
        question: 'What is 2 + 10',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    },
    {
        question: 'What is 2 + 1234',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    }

]