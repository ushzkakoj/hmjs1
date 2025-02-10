// 1
const age = 14;
console.log(age)
// 2
const name = 'Andrei';
console.log(name)
// 3
const isStudent = true;
console.log(isStudent)
// 4
const myString = '...';
console.log(myString)
// 5
const myNumber = 42;
console.log(myNumber + 10)
// 6
const myNull = null;
console.log(myNull)
// 7
const userName = prompt("Как звать?");
console.log(userName)
// 8
const userAnswer = confirm("Реально хочешь выйти?")
if (userAnswer == true) {
    alert("Спасибо за подтверждение!")
}
else {
    alert("Дейвствие отменено")
}
// 9
const userAlertAnswer = alert("Это может быть опасно!")
const userAnswer2 = confirm("Пожалуйста, подтвердите это")

if (userAnswer2 == true) {
    alert("Спасибо за подтверждение!")
}
else {
    alert("Дейвствие отменено")
}