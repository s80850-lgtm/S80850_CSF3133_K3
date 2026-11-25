
// Questions Array
const questions = [
    {
        question: "What is the capital of Malaysia?",
        options: ["Johor", "Kuala Lumpur", "Penang", "Melaka"],
        answer: "Kuala Lumpur"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "CSS", "Java", "SQL"],
        answer: "CSS"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Management Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!--", "**"],
        answer: "//"
    }
];

// Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;
let answered = false;
let quizStarted = false;


// 1. Shuffle Questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}


// 2. Start Timer
function startTimer() {
    clearInterval(timer);

    timeLeft = 15;

    document.getElementById("timer").textContent =
        "Time: " + timeLeft + " seconds";

    timer = setInterval(function() {

        timeLeft--;

        document.getElementById("timer").textContent =
            "Time: " + timeLeft + " seconds";

        if (timeLeft <= 0) {

            clearInterval(timer);

            answered = true;

            document.getElementById("feedback").textContent =
                "Time's up! The correct answer is: " +
                questions[currentQuestion].answer;

            document.getElementById("submit-btn").textContent =
                currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question";
        }

    }, 1000);
}


// 3. Display Question
function displayQuestion() {

    answered = false;

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    document.getElementById("feedback").textContent = "";

    document.getElementById("options").innerHTML = "";

    questions[currentQuestion].options.forEach(function(option) {

        document.getElementById("options").innerHTML +=
            '<label><input type="radio" name="answer" value="' +
            option + '"> ' + option + '</label>';

    });

    document.getElementById("submit-btn").textContent =
        "Submit Answer";

    startTimer();
}


// 4. Check Answer
function checkAnswer() {

    if (!quizStarted) {

        startQuiz();

        return;
    }

    if (answered) {

        nextQuestion();

        return;
    }

    const selectedAnswer =
        document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {

        document.getElementById("feedback").textContent =
            "Please select an answer!";

        return;
    }

    clearInterval(timer);

    answered = true;

    if (selectedAnswer.value === questions[currentQuestion].answer) {

        score++;

        document.getElementById("feedback").textContent =
            "Correct! Well done!";

    } else {

        document.getElementById("feedback").textContent =
            "Incorrect! The correct answer is: " +
            questions[currentQuestion].answer;
    }

    document.getElementById("score").textContent =
        "Your Score: " + score;

    document.getElementById("submit-btn").textContent =
        currentQuestion === questions.length - 1
        ? "Finish Quiz"
        : "Next Question";
}


// 5. Next Question
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        displayQuestion();

    } else {

        clearInterval(timer);

        document.getElementById("question").textContent =
            "Quiz Completed!";

        document.getElementById("options").innerHTML = "";

        document.getElementById("timer").textContent = "";

        document.getElementById("feedback").textContent =
            "You have completed the quiz!";

        document.getElementById("submit-btn").style.display =
            "none";

        document.getElementById("score").textContent =
            "Final Score: " + score + " / " + questions.length;
    }
}


// 6. Start Quiz
function startQuiz() {

    quizStarted = true;

    shuffleQuestions();

    currentQuestion = 0;

    score = 0;

    document.getElementById("score").textContent =
        "Your Score: 0";

    displayQuestion();
}
