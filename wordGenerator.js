// var wordArray = ['nowork', 'Accuracy', 'capacity', 'customer', 'decision', 'educated', 'interest', 'peaceful']

var easyLevel = ['document', 'finished', 'firewall', 'grateful', 'identify', 'magazine', 'memorial', 'employee', 'exchange', 'network', 'accuracy', 'capacity', 'calendar', 'cellular', 'athletic', 'bacteria', 'database', 'customer', 'decision', 'educated', 'interest', 'peaceful', 'lastweek']
var mediumLevel = ['mosquito', 'buddhist', 'crocodile', 'gwalior', 'elephant', 'kangaroo  ', 'grasshopper', 'accommodate', 'admiration', 'adaptive', 'charminar', 'zoological', 'afghanistan', 'argentina', 'armenia', 'netherlands', 'territories', 'maharashtra', 'corporation', 'blueberries', 'huckleberry', 'eggfruit']
var hardLevel = ['absolute', 'accommodate', 'admiration', 'adaptive', 'charminar', 'zoological', 'afghanistan', 'argentina', 'armenia', 'netherlands', 'territories', 'maharashtra', 'corporation', 'blueberries', 'huckleberry', 'eggfruit']
var wordArray = []
var levelId;
var levelNumber;
var hintNumber = 0

function chooseLevel(levelNumber) {
    if (levelNumber == 1) {
        wordArray = easyLevel;
        levelId = 'Label - Easy '
        localStorage.setItem("selectedLevel", levelNumber)
    }
    if (levelNumber == 2) {
        wordArray = mediumLevel;
        levelId = 'Label - Intermidiate '
        localStorage.setItem("selectedLevel", levelNumber)
    }
    if (levelNumber == 3) {
        wordArray = hardLevel;
        levelId = 'Label - Advance '
        localStorage.setItem("selectedLevel", levelNumber)
    }
}
// //var array = [];
count = 0;
var j;
var word;
var htword;

function startGame() {
    var levelNumber = localStorage.getItem("selectedLevel")
    chooseLevel(levelNumber);
    wordgenerator()
    document.getElementById('showlevel').innerHTML = levelId;
}

function wordgenerator() {
    winclick = 0;
    failCount = 0;
    ht = '';
    displayimage();
    document.getElementById('btnHints').disabled = null
    document.getElementById('lostImage').style.visibility = 'hidden';
    document.getElementById('winnerImage').style.visibility = 'hidden';
    //document.getElementById('Imagehangman').style.visibility = "hidden";
    var node = document.getElementById("demoAlpha");
    node.innerHTML = null;
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[wordIndex];
    wordArray.splice(wordIndex, 1)
        // word = wordArray[count];

    var ht = "";
    for (var i = 0; i < word.length; i++) {
        ht += '<div id = alpha' + i + ' style="display:inline; font-size:38px" >'

        ht += '<span id = index' + i + ' >'
        ht += '__ </span> </div>'
    }

    node.innerHTML += ht;


    count += 1;
    inputButtonEnable();
    document.getElementById('showpoint').innerText = '';
    getHintCount();
}

function getHintCount() {
    var level = localStorage.getItem("selectedLevel");
    if (level == 1) {
        hintNumber = 3;
    } else if (level == 2) {
        hintNumber = 2;
    } else if (level == 3) {
        hintNumber = 1;
    }
}

// function displayRounds() {
//     var round = "";
//     for (var i = 1; i <= dummyArray.length; i++) {
//         round = "<p>" + i + "</p>"
//     }
//     document.getElementById("rounds").innerHTML = round;

// }