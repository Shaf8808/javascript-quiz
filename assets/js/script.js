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