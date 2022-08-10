const body = document.querySelector('body');

// create a new element
const header = document.createElement('header');
// add the element to the dom

body.appendChild(header)

// 
// const div = document.querySelector('.test') 
// console.log('div is', div)

// // const divById = document.getElementById('a1')
// // console.log('divbyid is', divById)

// const para = document.createElement('p')

// div.appendChild(para)
// para.innerText = 'Hello from JS'

// para.style.border = '1px solid black'

// header styling
header.style.width = '100%'
header.style.height = '100px'
header.style.background = 'lightBlue'
header.textContent = 'This is the menu'

header.style.display = 'flex'
header.style.justifyContent = 'center'
header.style.alignItems = 'center'

header.classList.add('header')
header.classList.remove('header')

