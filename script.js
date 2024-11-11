function toggle() {
    var text = document.getElementById("introtext");
    text.style.opacity = '1.0';
    //document.getElementById("introtext").innerHTML = "The Murder Mansion, on a stormy night, has become the stage for a mystery. Maggie Foster, a young heiress, has found a bloodstained handkerchief and an ominous note suggesting betrayal. Each of the characters has a potential motive, and through clues and accusations, the real culprit may come to light.";
    var button = document.getElementById("start");
    var nextbutton = document.getElementById("nextbutton");
    button.style.opacity = '0';
    nextbutton.classList.add("fadein");
    nextbutton.style.display = 'block';
}

let index = 1;
show(index);

// Next/previous controls
function plus(n) {
    show(index += n);
}

// Thumbnail image controls
function currentChar(n) {
  show(index = n);
}

function show(n) {
    let i;
    let chars = document.getElementsByClassName("chars");
    if (n > chars.length) {
        index = 1;
    }
    if (n < 1) {
        index = chars.length;
    }
    for (i = 0; i < chars.length; i++) {
        chars[i].style.display = "none";
    }
    chars[index-1].style.display = "block";
}