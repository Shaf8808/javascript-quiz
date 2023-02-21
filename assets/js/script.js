const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const title = document.getElementById('heading')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const homeButton = document.getElementById('home-btn')

// Welcome section

const welcomeMessageRef = document.getElementById('welcome-message')
const welcomeSection = document.getElementById('welcome')

// User form section

const userSectionRef = document.getElementById('user');
const userFormRef = document.getElementById('user-form');
const userNameRef = document.getElementById('user-name');

const userFormOpen = () => {
    welcomeMessageRef.innerHTML = '';
    userNameRef.value = '';
    userNameRef.focus();
}

const handleUserFormSubmit = event => {
    event.preventDefault();
    userSectionRef.classList.add('hide')
    welcomeSection.classList.remove('hide')
    welcomeMessageRef.innerHTML = `Are you ready ${userNameRef.value}?`;   
    startButton.classList.remove('hide')
}

// User form submit
userFormRef.addEventListener('submit', handleUserFormSubmit);

// Questions section

let shuffledQuestions, currentQuestionIndex

// Controls buttons section

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
homeButton.addEventListener('click', function () {
    location.href = "index.html"
})


// The function that runs once the user selects the play button after entering their name

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    homeButton.classList.remove('hide')
    welcomeMessageRef.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random( - .5))
    currentQuestionIndex = 0
    title.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()

}

// The functions that run once the user selects the next button which appears AFTER they choose their answer

function setNextQuestion() {
    resetQuestions()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// The function that creates button elements for each answer

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            incrementScore(CORRECT_BONUS);
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// Function for scoring system 

function resetQuestions() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

/* The functions that runs once the user completes the quiz */


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

/* The functions for adding the correct and wrong classes based on the user's input */ 


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

// The questions for my quiz app

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