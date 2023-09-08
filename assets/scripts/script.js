const rotater = document.querySelector('.rotater')
// console.log(rotater)
const numbers = [1, 2, 3, 6, 9, 8, 7, 4]
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
function clockwise (numbers) {
  numbers.unshift(numbers.pop())
}
function anticlock (numbers) {
  numbers.push(numbers.shift())
}
function update (numbers) {
  one.innerHTML = numbers[0]
  two.innerHTML = numbers[1]
  three.innerHTML = numbers[2]
  four.innerHTML = numbers[3]
  six.innerHTML = numbers[4]
  seven.innerHTML = numbers[5]
  eight.innerHTML = numbers[6]
  nine.innerHTML = numbers[7]
}
rotater.addEventListener('click', () => {
  clockwise(numbers)
  update(numbers)
})
one.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
seven.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
two.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
three.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
four.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
six.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
eight.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
nine.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
