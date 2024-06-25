
let currentPlayer = "X"
const arr = Array(9).fill(null)

const allBoxes = document.querySelectorAll(".box")
const myH3 = document.querySelector("h3")
const myButton = document.querySelector("button")
const myH2 = document.querySelector("h2")

myH2.textContent = `${currentPlayer}'s turn`

allBoxes.forEach(function (i) {
    i.addEventListener("click", function (event) {
        const boxId = Number(event.target.id)
        arr[boxId] = currentPlayer
        i.textContent = currentPlayer
        checkWinner()
        swapPlayers()
    })
})

let winnerStatus = false

function checkWinner() {
    if ((arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])) {
        myH3.textContent = `${currentPlayer} is the winner`
        winnerStatus = true
    } else {
        winnerStatus = false
        const output = arr.every(function (i) {
            if (i != null) {
                return i
            }
        })

        if (output == true) {
            myH3.textContent = "Game is drawn!"
        }
    }
}

function swapPlayers() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else if (currentPlayer == "O") {
        currentPlayer = "X"
    }
    if (winnerStatus == false) {
        myH2.textContent = `${currentPlayer}'s turn`
    } else {
        myH2.textContent = ""
    }
}

myButton.addEventListener("click", function () {
    allBoxes.forEach(function (i) {
        i.textContent = ""
    })
    myH3.textContent = ""
    arr.fill(null)
})