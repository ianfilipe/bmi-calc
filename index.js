const nameElement = document.querySelector('#name')
const weightElement = document.querySelector('#weight')
const heightElement = document.querySelector('#height')
const calcElement = document.querySelector('#calc')
const resultElement = document.querySelector('#result')

nameElement.addEventListener('input', () => { 
    name = nameElement.value
})
weightElement.addEventListener('input', () => { 
    weight = parseInt(weightElement.value)
})
heightElement.addEventListener('input', () => {
    height = parseFloat(heightElement.value)
})

calcElement.addEventListener('click', () => {
    let result = weight / (height * height)
    if (result > 30) {
        resultElement.value=`${name}, you're overweight.`
    } else {
        resultElement.value=`${name}, you're not overweight.`
    }
})
