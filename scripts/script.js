alert("Welcome to Hangman !")
let Player1 = prompt("Insert Player 1 name");
console.log("Name of first player - " + Player1);

let Player2 = prompt("Insert Player 2 name");
console.log("Name of second player - " + Player2);

let word = prompt("Welcome to Hangman!\n" + Player1 + ", please enter a word for " + Player2 + " to guess.").toUpperCase();
console.log("Word for guess - " + word);

let connectedLetters = new Array;

const maxStrikes = 6;

let strikeLetters = new Array(maxStrikes);

let inputLetters = new Array;

let counter = 0;


isEmpty(word);

function isEmpty(str) {
    if (str.trim() == '') {
        alert("You did not insert any information");
        setTimeout(function () { location.reload(); }, 3000);
    } else {
        drawWordProgress(word);
    }
}



for (i = 0; i < word.length; i++) {
    connectedLetters.push(word[i]);
}

function drawWordProgress(a) {

    let parent = document.body.getElementsByClassName("word");
    console.log(parent)

    for (i = 0; i < parent.length; i++) {
        parent[i].innerHTML = "";

        for (j = 0; j < a.length; j++) {
            let div = document.createElement("div");
            let p = document.createElement("p");

            div.id = "d" + j;
            p.id = "p" + j;
            p.innerHTML = "*";

            div.setAttribute("class", "letter");
            p.setAttribute("class", "character");

            div.appendChild(p);
            parent[i].appendChild(div);
        }
    }
}

function drawWord(a) {
    a.forEach(function (el) {
        el.index.forEach(function (el1) {
            let target = document.getElementById("p" + el1);
            target.innerHTML = el.letter;
        });
    });
}

function processGuess(event) {
    event.preventDefault();
    let parent = document.body.getElementsByClassName("attempts");
    let info = document.getElementById("textcharacter").value.toUpperCase();

    for (i = 0; i < info.length; i++) {
        inputLetters.push(info[i]);
    }

    for (i = 0; i < parent.length; i++) {
        parent[i].innerHTML = "";

        for (j = 0; j < inputLetters.length; j++) {
            let li = document.createElement("li");

            li.id = "li" + j;
            li.innerHTML = inputLetters[j];

            li.setAttribute("class", "li");

            parent[i].appendChild(li);
        }
    }
    let intersection = connectedLetters.filter(x => inputLetters.includes(x));
    strikeLetters = inputLetters.filter(x => !connectedLetters.includes(x));
    console.log(" true - " + intersection);
    console.log("false - " + strikeLetters);



    var lets = [];

    for (i = 0; i < connectedLetters.length; i++) {
        for (j = 0; j < inputLetters.length; j++) {


            if (connectedLetters[i] == inputLetters[j]) {
                var state = true;
                lets.forEach(function (el) {
                    if (connectedLetters[i] == el.letter) {
                        el.index.push(i);
                        state = false;
                    }
                });
                if (state) {
                    var obj = { letter: connectedLetters[i], index: [i] };
                    lets.push(obj);
                }


            }
        }
    }
    drawWord(lets);


    drawGallows(strikeLetters.length);

    if (intersection.length == connectedLetters.length) {
        alert("WIN!!!!!");
        setTimeout(function () { location.reload(); }, 3000);

    }
    else if (strikeLetters.length >= maxStrikes) {
        alert("LOSE!!!!!");
        setTimeout(function () { location.reload(); }, 3000);

    }
}


function drawGallows(a) {
    let img = document.getElementById("picture");

    if (a == 1) {
        img.setAttribute("src", "images/strike-1.png")
        console.log(img);
    }
    if (a == 2) {
        img.setAttribute("src", "images/strike-2.png")
        console.log(img);
    }
    if (a == 3) {
        img.setAttribute("src", "images/strike-3.png")
        console.log(img);
    }
    if (a == 4) {
        img.setAttribute("src", "images/strike-4.png")
        console.log(img);
    }
    if (a == 5) {
        img.setAttribute("src", "images/strike-5.png")
        console.log(img);
    }
    if (a == 6) {
        img.setAttribute("src", "images/strike-6.png")
        console.log(img);
    }
}




document.getElementById("myFormElement").addEventListener("submit", processGuess);



