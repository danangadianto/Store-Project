const quizData = [
    {
        question: "Apa yang menjadi mas kawin Bung Hatta?",
        a: "Untuk Negeriku",
        b: "Demokrasi Kita",
        c: "Mendayung Antara Dua Karang",
        d: "Alam Pikiran Yunani",
        correct: "d",
    },
    {
        question: "Apa nama perguruan tinggi tempat BJ Habibie menimba ilmu di Eropa?",
        a: "Eidgenössische Technische Hochschule Zürich",
        b: "Rheinisch-Westfälische Technische Hochschule Aachen",
        c: "Ludwig-Maximilians-Universität München",
        d: "École Polytechnique Fédérale de Lausanne",
        correct: "b",
    },
    {
        question: "Mana yang bukan tahun Magnus Carlsen menjadi World Champion?",
        a: "2010",
        b: "2013",
        c: "2018",
        d: "2021",
        correct: "a",
    },
    {
        question: "Siapakah pemimpin desa paling korup?",
        a: "Gaara",
        b: "Sarutobi Hiruzen",
        c: "A",
        d: "Oonoki",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})