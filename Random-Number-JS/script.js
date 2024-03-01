const btn = document.querySelector("#myButton")
const label = document.querySelector("#label1")
const labell = document.querySelector("#label2")
const labelll = document.querySelector("#label3")
const min = 1
const max = 6
let randomNo1
let randomNo2
let randomNo3

btn.addEventListener("click" , () =>  {
    randomNo1 = Math.floor(Math.random()*max)
    randomNo2 = Math.floor(Math.random()*max)
    randomNo3 = Math.floor(Math.random()*max)
    
    label.textContent = randomNo1
    labell.textContent = randomNo2
    labelll.textContent = randomNo3
})