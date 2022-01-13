//  Button Press
var NumberOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnnimation(buttonInnerHTML);
    });
}

// Keyboard Press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    makeAnnimation(event.key);
});

// Make Audio
function makeSound(value) {
    switch (value) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        default: console.log(value);
    }
}

// Make Annimation
function makeAnnimation(currentKey) {
    var buttonAnnimation = document.querySelector("." + currentKey);
    buttonAnnimation.classList.add("pressed");
    setTimeout(function () {
        buttonAnnimation.classList.remove("pressed");
    }, 100);
}