var count;

//var wordMatch;

var failCount;

var winclick = 0;
var hintsWordArray = [];

function inputButton(x) {
    document.getElementById('goodluck').style.visibility = "hidden";
    var alph = document.getElementById(x);
    var inputAlpha = (document.getElementById(x).innerText).toLowerCase();
    if (word.includes(inputAlpha)) {
        for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) == inputAlpha) {
                showAlfa = document.getElementById('index' + i);
                showAlfa.innerText = inputAlpha
                    //console.log(showAlfa)
                hintsWordArray.push(inputAlpha);
                winclick++;
            }
        }
        alph.style.color = 'green';
    } else {
        alph.style.color = 'red';
        failCount++;
    }

    alph.style.backgroundColor = 'lightblue';
    document.getElementById(x).disabled = true;
    // }

    if (failCount == 10) {
        // alert('you have tried Max time')
        var displayResult = document.getElementById('demoAlpha');
        displayResult.innerText = 'You lose this round for the word: "' + word + '"';
        //displayResult.innerText = word;
        document.getElementById('newButton').style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "hidden";
        hintDisable();
        // to display it hang at count 10 ;
        document.getElementById(10).style.visibility = "visible";;
        document.getElementById('lostImage').style.visibility = "visible";
        failCount = 0;
    } else if (winclick == word.length) {
        var displayResult = document.getElementById('demoAlpha');
        displayResult.innerText = 'You win this round for the word: "' + word + '"';
        document.getElementById('newButton').style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "hidden";
        winDisplay();
        hintDisable()
    }
    displayHangman(failCount);
    var chanceleft = 10 - failCount;
    document.getElementById('lifeLeft').innerHTML = chanceleft;
    gamePointDisplay(failCount, winclick)
}


function inputButtonEnable() {

    var butnchild = document.getElementsByClassName('butn');
    buttonChildLen = document.getElementsByClassName('butn').length;
    for (var i = 0; i < buttonChildLen; i++) {
        document.getElementsByClassName('butn')[i].disabled = false;
        document.getElementsByClassName('butn')[i].style.backgroundColor = '#1ABC9C';
        document.getElementsByClassName('butn')[i].style.color = 'white'
    }
}

function newGenerator() {
    document.getElementById('goodluck').style.visibility = "visible";
    document.getElementById('newButton').style.visibility = "hidden";
    document.getElementById('nextButton').style.visibility = "visible";

    var displayResult = document.getElementById('demoAlpha');
    displayResult.innerText = ' ';
    wordgenerator()
        //  document.getElementById('hints').innerText = '';
    document.getElementById('showpoint').innerText = '';
    wordArray = chooseLevel(selectedLevel)
    for (var i = 1; i < 11; i++) {
        document.getElementById(i).style.visibility = "hidden";
    }
    failCount = 0

    // document.getElementById('Imagehangman').style.display = "hidden";
    //document.getElementById('Imagehangman').getElementById(i).style.visibility = "hidden";
}