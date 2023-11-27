const prompt = require("prompt-sync")()
let timeMessage

const num = parseInt(prompt("Введіть число = "))
console.log("sec, min")
const time = prompt("Оберіть виір часу = ")

console.log( timeMessage = num + " " + time)
whatTime(dodavania, num, time)

function whatTime(Func, x, y){
    switch(y){
        case "sec": 
            setTimeout(Func, x*1000)
            break
        case "min": 
            setTimeout(Func, x*60000)
            break
    }
}

function dodavania(){
    console.log("Повідомлення відправилось за", timeMessage)
}