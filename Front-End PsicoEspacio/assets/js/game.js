const quizData = [
    {
        question: "Como te sientes en general?",
        choices: ["Mal", "Muy mal", "Bien", "Muy bien", "Neutral"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Experimentas cambios de animo frecuentes?",
        choices: ["Si, muy a menudo", "A veces", "Rara vez", "No nunca"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Tienes dificultades para conciliar el sueño o dormir en exceso?",
        choices: ["Si tengo problemas para conciliar el sueño", "Si, duermo en exceso", "No, duermo bien"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Sientes falta de energia y motivacion?",
        choices: ["Si, muy a menudo", "A veces", "Rara vez", "No, nunca"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Experimentas ataques de ansiedad o panico?",
        choices: ["Si, con frecuencia", "A veces", "Rara vez", "No, nunca"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Tienes dificultades para concentrarte o tomar decisiones?",
        choices: ["Si, con frecuencia", "A veces", "Rara vez", "No, nunca"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Te sientes triste o desesperanzado/a la mayor parte del tiempo?",
        choices: ["Si, la mayoria del tiempo", "A veces", "Rara vez o nunca"],
        diagnoses: ["Depresion", "Tristeza","Estado mental estable"]
    },
    {
        question: "Has perdido interes en actividades que solias disfrutar?",
        choices: ["Si, he perdido el interes", "A veces me cuesta encontrar interes en las cosas", "No, sigo disfrutando de mis actividades"],
        diagnoses: ["Depresion", "Tristeza", "Estado mental estable"]
    },
    {
        question: "Experimentas pensamientos negativos recurrentes o rumiaciones?",
        choices: ["Si todo el tiempo", "A veces me cuesta controlar los pensamientos negativos", "No, no tengo pensamientos recurrentes"],
        diagnoses: ["Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Sientes que tu autoestima ha disminuido?",
        choices: ["Si, mi autoestima ha disminuido", "A veces me siento inseguro/a", "No, tengo buena autoestima"],
        diagnoses: ["Depresion", "Tristeza","Estado mental estable"]
    },
    {
        question: "Experimentas cambios en tu apetito o peso?",
        choices: ["Si, he experimentado cambios", "A veces", "No, mi apetito y peso se mantienen estables"],
        diagnoses: ["Depresion", "Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Tienes dificultades para relacionarte con los demas o te sientes aislado/a?",
        choices: ["Si, me cuesta relacionarme con los demas", "A veces me siento un poco aislado/a", "No, tengo buenas relaciones sociales"],
        diagnoses: ["Depresion", "Tristeza", "Estado mental estable"]
    },
    {
        question: "Sientes que no puedes controlar tus emociones?",
        choices: ["Si, siento que mis emociones me desbordan", "A veces me cuesta controlar mis emociones", "No, puedo controlar mis emociones"],
        diagnoses: ["Depresion", "Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Experimentas pensamientos de autodestruccion o suicidas?",
        choices: ["Si, con frecuencia", "A veces", "Rara vez o nunca"],
        diagnoses: ["Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    {
        question: "Buscas ayuda profesional para cuidar tu salud mental?",
        choices: ["Si, ya estoy recibiendo ayuda profesional", "Estoy considerando buscar ayuda profesional", "No, estoy buscando ayuda profesional"],
        diagnoses: ["Depresion", "Tristeza","Trastorno de Ansiedad", "Estado mental estable"]
    },
    
];
    
const quizContainer = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result');
const getDiagnosisButton = document.getElementById('get-diagnosis');
const diagnosisParagraph = document.getElementById('diagnosis');
let currentQuestion = 0;
const answers = [];

function buildQuiz() {
    const questionData = quizData[currentQuestion];

    if (!questionData) {
        showDiagnosis();
        return;
    }

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');
    questionContainer.innerHTML = `
        <p>${currentQuestion + 1}. ${questionData.question}</p>
        <div class="choices">
            ${questionData.choices.map((choice, index) =>
                `<label><input type="radio" name="q${currentQuestion}" value="${index}">${choice}</label>`
            ).join('')}
        </div>
    `;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionContainer);
    questionContainer.style.display = 'block';
}

function showDiagnosis() {
    const result = calculateDiagnosis();
    resultContainer.style.display = 'block';
    diagnosisParagraph.textContent = result;
    
}

function calculateDiagnosis() {
    const counts = [0, 0, 0, 0];

    answers.forEach(answer => {
        counts[answer]++;
    });

    const maxIndex = counts.indexOf(Math.max(...counts));
    return quizData[0].diagnoses[maxIndex];
}
submitButton.addEventListener('click', function (event) {
event.preventDefault();
const selectedChoice = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
if (selectedChoice) {
    answers.push(parseInt(selectedChoice.value));
}


currentQuestion++;

if (currentQuestion == 15){
    let nexq = document.getElementById("submit-button").style.display = "none";
}

if(currentQuestion == 14){
    let lastq = document.getElementById("submit-button").textContent = "Finalizar";
}

buildQuiz();
});

getDiagnosisButton.addEventListener('click', function () {
    const result = calculateDiagnosis();
    
    if(result == "Depresion"){
        window.location.href = "diagnosticos/depresion.html";
    }

    if(result == "Tristeza"){
        window.location.href = "diagnosticos/tristeza.html";
    }

    if(result == "Trastorno de Ansiedad"){
        window.location.href = "diagnosticos/ansiedad.html";
    }

    if(result == "Estado mental estable"){
        window.location.href = "diagnosticos/estable.html";
    }
});

buildQuiz();
