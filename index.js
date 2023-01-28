let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count ++
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    Reset()

}

function Reset(){
    count = 0
    countEl.textContent = 0
}