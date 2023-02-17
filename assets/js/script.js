const startButton = document.getElementById('start-btn')
const title = document.getElementById('heading')
const questionContainer = document.getElementById('question-container')



startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    title.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()

}


function setNextQuestion() {


}


function selectAnswer() {


}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    }
]