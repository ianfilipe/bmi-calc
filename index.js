const nameElement = document.querySelector('#name')
const weightElement = document.querySelector('#weight')
const heightElement = document.querySelector('#height')
const calcElement = document.querySelector('#calc')
const resultElement = document.querySelector('#result')
let name, weight, height, result

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
    result = weight / height ** 2
    
    if (result < 18.5) {
        resultElement.value=`${name}, you're underweight.`
    } else if (result < 24.9) {
        resultElement.value=`${name}, you're at normal weight.`
    } else if (result < 29.9) {
        resultElement.value=`${name}, you're overweight.`
    } else if (result < 34.9) {
        resultElement.value=`${name}, you're with severe obesity.`
    } else if (result < 39.9) {
        resultElement.value=`${name}, you're with morbid obesity.`
    } else {
        resultElement.value=`${name}, you're with super obesity.`
    }
})
