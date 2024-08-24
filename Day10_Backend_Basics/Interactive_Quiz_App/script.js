const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score');
const scoreValue = document.getElementById('score-value');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language is used for web apps?",
        answers: ["PHP", "Python", "JavaScript", "All"],
        correct: 3
    },
    {
        question: "Who is the President of the US?",
        answers: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        answers: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: 1
    },
    {
        question: "What year was JavaScript launched?",
        answers: ["1996", "1995", "1994", "None of the above"],
        correct: 1
    }
];

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerText = currentQuestion.question;
    quizContainer.appendChild(questionElement);

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        quizContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    while (quizContainer.firstChild) {
        quizContainer.removeChild(quizContainer.firstChild);
    }
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    const answerButtons = document.querySelectorAll('.answer-btn');

    if (index === correctAnswer) {
        answerButtons[index].classList.add('correct');
        score++;
        showCongrats();
    } else {
        answerButtons[index].classList.add('incorrect');
        showTryAgain();
    }

    answerButtons.forEach((button, idx) => {
        button.disabled = true;
        if (idx === correctAnswer) {
            button.classList.add('correct');
        }
    });

    nextButton.classList.remove('hidden');
}

function showCongrats() {
    const congratsMessage = document.createElement('div');
    congratsMessage.innerText = "Congratulations!";
    congratsMessage.classList.add('congrats');
    quizContainer.appendChild(congratsMessage);
}

function showTryAgain() {
    const tryAgainMessage = document.createElement('div');
    tryAgainMessage.innerText = "Try Again!";
    tryAgainMessage.classList.add('try-again');
    quizContainer.appendChild(tryAgainMessage);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

restartButton.addEventListener('click', () => {
    scoreContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
});

function showScore() {
    quizContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    scoreValue.innerText = `${score} / ${questions.length}`;
    scoreContainer.classList.remove('hidden');
}

// Initialize the quiz
showQuestion();