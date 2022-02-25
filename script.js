const quizData = [
  {
    question:
      'Sebuah alamat pada komputer agar komputer bisa saling terhubung dengan komputer lain disebut dengan?',
    a: 'Netmask/Subnet Mask',
    b: 'Broadcast',
    c: 'IP Address',
    d: 'E-mail',
    correct: 'c',
  },
  {
    question: 'Komputer Stand Alone adalah?',
    a: 'Komputer yang memiliki 2 server dan 2 user',
    b: 'komputer yang memiliki banyak server dan banyak user',
    c: 'komputer yang memiliki 2 server dan 1 user',
    d: 'komputer yang hanya memiliki 1 server dan 1 user saja',
    correct: 'd',
  },
  {
    question:
      'Jenis jaringan komputer dimana server melayani permintaan client adalah?',
    a: 'Client server',
    b: 'Workstation',
    c: 'Intranet',
    d: 'Internet',
    correct: 'a',
  },
  {
    question: 'Berikut adalah area pada jaringan komputer, kecuali?',
    a: 'WAN (Wide Area Network)',
    b: 'CAN (Country Area Network)',
    c: 'PAN (Personal Area Network',
    d: 'LAN (Local Area Network)',
    correct: 'b',
  },
]

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
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
