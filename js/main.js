gQuests = [
    { id: 1, opts: ['GLASSES', 'MOUTH'], correctOptIndex: 1 },
    { id: 2, opts: ['Missing Hole', 'Missing Tooth'], correctOptIndex: 0 },
    { id: 3, opts: ['Missing Tooth', 'Missing Eye'], correctOptIndex: 0 }
]

var gCurrQuestIdx = 0;

function initGame() {
    renderQuestion();
    console.log('GoodLuck');
}

function restart() {
    gCurrQuestIdx = 0;
    renderQuestion();
}


function checkAnswer(optIdx) {
    console.log('optIdx', optIdx);
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        console.log('You Are Correct!!!! :)');
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {

            wow();
        } else {

            renderQuestion()
        }


    } else {
        alert('Try Again')
    }
}

function renderQuestion() {
    var elOptions = document.querySelector('.options');
    var elImg = document.querySelector('img');
    var str = ''
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        str += `<button onclick ="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button>`
        elImg.src = `img/${gCurrQuestIdx + 1}.jpg`;
    }
    elOptions.innerHTML = str;
}


function wow() {
    var elImg = document.querySelector('img');
    elImg.src = "img/4.png";
    var elH1 = document.querySelector('h1');
    elH1.innerText = 'Congratulation! You WON :)'
    var elOptions = document.querySelector('.options');
    elOptions.innerHTML = ''
    return;
}

