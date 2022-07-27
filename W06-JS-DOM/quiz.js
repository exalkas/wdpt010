const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const q = document.querySelector('#question')

const answer1 = document.querySelector('#a_text')
const answer2 = document.querySelector('#b_text')
const answer3 = document.querySelector('#c_text')
const answer4 = document.querySelector('#d_text')



const button = document.getElementById('submit')

let idx = 0, score = 0;

renderQAndA()

button.onclick = () => {

    // find and check the correct answer
    const answers = document.querySelectorAll('.answer')
    const answer = findAnswer(answers)

    if (answer === undefined) return

    checkCorrect(answer)
    deselect(answers);
    
    // console.log('Onclick: idx is ', idx);

    if (idx >= quizData.length - 1) {
        alert(`End of quiz! You scored ${score} out of ${quizData.length}`)

        idx = 0; // reinitialize
        score = 0;
        renderQAndA() // render questions

        return;
    }

    
    idx++;
    renderQAndA()

    console.log('Onclick: answer is ', answer);
}

function renderQAndA() {

    if (idx < quizData.length) { // check if idx is less than array length

        q.textContent = quizData[idx].question
        answer1.textContent = quizData[idx].a
        answer2.textContent = quizData[idx].b
        answer3.textContent = quizData[idx].c
        answer4.textContent = quizData[idx].d
    
    } 
}

function findAnswer(list) {

    for (let i = 0; i < list.length; i++) {

        if (list[i].checked === true) {
            return list[i].id
        } 
    }

    return undefined
}

function deselect(list) {

    // for (let i = 0; i < list.length; i++) {

    //     list[i].checked = false;
    // }

    list.forEach(element => element.checked = false);
}

function checkCorrect(answer) {

    console.log('checkCorrect: idx', idx);
    if (answer === quizData[idx].correct) {
        score++;
    }

}