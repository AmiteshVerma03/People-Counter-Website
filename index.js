// document.getElementById("countNo.").innerText=5
let count = 0
function func() {
    // let x=count.innerText
    count++
    countElement.textContent = count
}
function func1() {
    countElemen.textContent = countElemen.textContent+count+" - "
    count = 0
    countElement.innerText = count
}
let countElement = document.getElementById("countNo")
let countElemen = document.getElementById("history")
let button = document.getElementById("btn")
let button1 = document.getElementById("btn1")
button.addEventListener("click", func)
button1.addEventListener("click", func1)
