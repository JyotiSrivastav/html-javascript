function displayHangman(failCount) {

    for (var i = 1; i <= failCount; i++) {
        document.getElementById(i).style.visibility = "visible";;
    }
    // if (i == 10) {
    //     document.getElementById('lostImage').style.visibility = "visible";
    // }
}
//hintsWordArray use this array for selected word
function hintsDisplay(wordArray) {
    if (hintNumber > 0) {
        var index = Math.floor(Math.random() * word.length);
        var x = word.charAt(index);
        document.getElementById('hints').innerText = ':' + x.toUpperCase();
        hintNumber--;
    } else {
        document.getElementById('hints').innerText = ': Ohh Please !!! Idiot';
    }

}

function gamePointDisplay(failCount, winclick) {
    var losepoint = failCount * 5;
    var winpoint = winclick * 10;
    var total = winpoint - losepoint;
    document.getElementById('showpoint').innerText = total;
    // var points = (winpoint - losepoint) / wordArray.length;
    // document.getElementById('totalPointshow').innerText = points;
}

function displayimage() {
    // wordgenerator()
    document.getElementById('Imagehangman').style.visibility = "hidden";
    document.getElementById('hints').innerText = '';
    document.getElementById('lostImage').style.visibility = "hidden";
    for (var i = 1; i < 11; i++) {
        document.getElementById(i).style.visibility = "hidden";
    }
    failCount = 0;
    document.getElementById('winnerImage').style.visibility = 'hidden';
}

function winDisplay() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById(i).style.visibility = "hidden";
    }
    failCount = 0;
    document.getElementById('winnerImage').style.visibility = 'visible';
}

function hintDisable() {
    document.getElementById('btnHints').disabled = 'true'
    inputButtonDisable()
}

function inputButtonDisable() {
    for (var i = 0; i < 26; i++) {
        document.getElementsByClassName('butn')[i].disabled = true;
    }
}