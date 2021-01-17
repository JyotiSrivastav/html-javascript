function displayHangman(clickCount) {

    var imagediv;
    //imagediv.id 
    imagediv.style.display = 'visible';

    for (var i = 0; i < clickCount; i++) {
        var image = document.getElementById(i).style.visibility = "visible";;
        //image.style.display = 'visible';
    }
    if (i == 9) {
        document.getElementById('lostImage').style.visibility = "visible";
    }

}