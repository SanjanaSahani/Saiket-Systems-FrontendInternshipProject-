const quizData = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },

    {
        question: "Which language is used for web page interactivity?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },

    {
        question: "Which property changes text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: 2
    },

    {
        question: "Which method selects an element by ID?",
        options: [
            "getElementByClass()",
            "querySelectorAll()",
            "getElementById()",
            "selectElement()"
        ],
        answer: 2
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Oracle"
        ],
        answer: 1
    }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const q = quizData[currentQuestion];

    document.getElementById("question").innerText = q.question;

    document.getElementById("question-count").innerText =
        `Question ${currentQuestion + 1} / ${quizData.length}`;

    let optionsHTML = "";

    q.options.forEach((option, index) => {

        optionsHTML += `
<div class="option">
<label>
<input type="radio" name="answer" value="${index}">
${option}
</label>
</div>
`;

    });

    document.getElementById("options").innerHTML = optionsHTML;

    updateProgress();

}

function nextQuestion() {

    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer before continuing.");
        return;
    }

    if (parseInt(selected.value) === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }

}

function updateProgress() {

    let progress =
        ((currentQuestion) / quizData.length) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

}

function showResult() {

    document.querySelector(".quiz-container").innerHTML =
        `
<h2>Quiz Completed 🎉</h2>
<p>Your Score: ${score} / ${quizData.length}</p>
<button onclick="location.reload()">Restart Quiz</button>
`;

}

loadQuestion();