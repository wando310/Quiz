const proximo = document.querySelector('.next')
const popUp = document.querySelector('.pop-up')
const questao = document.querySelector('.question')
const exit = document.querySelector('.exit')
const countQuestion = document.querySelector('.count')
const alternativaA = document.getElementById('a')
const alternativaB = document.getElementById('b')
const alternativaC = document.getElementById('c')
const alternativaD = document.getElementById('d')
const alternativaE = document.getElementById('e')
const labelAlternatrivas = document.querySelectorAll('.lb-alternativas span')


proximo.addEventListener('click', nextQuestion)

//proxima questão
let count = 0
var hit = 0
function nextQuestion() {
    const q = quiz[count]
    showPopup(count,hit)

    questao.innerHTML = q.questao
    labelAlternatrivas[0].innerHTML = `${q.alternativas[0].a}`
    labelAlternatrivas[1].innerHTML = `${q.alternativas[1].b}`
    labelAlternatrivas[2].innerHTML = `${q.alternativas[2].c}`
    labelAlternatrivas[3].innerHTML = `${q.alternativas[3].d}`
    labelAlternatrivas[4].innerHTML = `${q.alternativas[4].e}`
    
    const answer = q.resposta

    punctuation(answer)
    
    count++
    countQuestion.innerHTML = `Questão <strong style="color: #800000">${count}</strong>/<strong style="color: #0000CD">${quiz.length}</strong>`
}

nextQuestion()

//pontuação
function punctuation(answer) {
    const hitsInput = document.querySelectorAll('.lb-alternativas input')
    const hitSpan = document.querySelectorAll('.lb-alternativas span')
    
    hitsInput.forEach(ele => ele.checked = false)
    
    hitSpan.forEach(span => span.addEventListener('click',
    function () { span.innerHTML === answer ? hit++ : '' }))
}

//pop up
function showPopup(count,hit){
    const message = document.querySelector('.message')
    const msg1 = `Parabéns você fez <strong style="color: green"> ${hit} </strong> pontos.`
    const msg2 = `Não foi dessa vez você fez apenas <strong style="color: red"> ${hit} </strong> ponto.`

    if(count === quiz.length){
        popUp.style.display = 'flex'
        document.querySelector('.pop-up h2').innerHTML = `Você acertou <strong style="color: blue">${hit}</strong>/<strong style="color: #9B30FF">${quiz.length}</strong> questões`
    }

    hit > 2 ? message.innerHTML = msg1 : message.innerHTML = msg2
}
//fechando pop up
exit.addEventListener('click',function(){
    window.location.href = 'index.html'
    popUp.style.display = 'none'
})

