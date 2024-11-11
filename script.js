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