const KahootSpammer = require('kahoot-spammer')
const api = KahootSpammer

console.log("Made By SytanxBlob#9848")
console.log("Sub To SUS https://www.youtube.com/channel/UCZ1JQ4BkOicujn0RetxObDw ")



var gamePin = prompt("Gamepin: (No Spaces) ") // Gamepin has to be like: //4100065
var BotName = prompt("Bot Name: (default: SUS")

if (BotName == "") {
  BotName = 'SUS' // If you don't put anything for BotName, it sets it to The SUS
}


var amount = prompt("Amount: (default is 100)") // Don't set more than 100 if it doesn't allow more than it because then it won't send

if (amount == "") {
  amount = 100 //If you don't put anything for amount, it sets it to 100
}


api.spam(gamePin, BotName, amount) 




console.log('NOW THERE KAHOOT QUIZ IS VERY SUS ' + amount + ' to ' + gamePin + ' with Name ' + BotName); 
