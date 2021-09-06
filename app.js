const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
/* creating function 
function logName(){
    console.log('Yashi)
}
calling:
logName()
*/
function logName(Name = "John Doe"){
    console.log(Name)
}
logName()

function add(a=0,b=0){
    const sum = a+b
     return sum
}
const result = add(12,99)
console.log(result)