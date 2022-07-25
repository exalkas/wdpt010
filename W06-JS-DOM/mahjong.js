
const body = document.querySelector('body')
const main = document.createElement('main')

body.appendChild(main)

const input = document.createElement('input')
main.appendChild(input)

input.addEventListener('keydown', e => console.log('the text typed is', e.target.value))

for (let i = 0; i < 10; i++) {

    const div = document.createElement('div')
    main.appendChild(div)

    div.className = 'box'
    div.id = i

    div.textContent = Math.ceil(Math.random() * 10)

    div.onclick = handleClick
}

// events

function handleClick(e) {

    const div = e.target

    div.style.background= 'black'
    console.log('im clicked', e.target.id)
}

function handleChange (e) {
    console.log('the text typed is', e)
}