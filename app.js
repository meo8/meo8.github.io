var rainbow = Math.floor(Math.random() * 9);
var bomb = Math.floor(Math.random() * 9);
if (rainbow === bomb) {
    var rainbow = Math.floor(Math.random() * 9);
}
var counter = 5;
var treeIcon = "&#x1f332";
var rainbowIcon = "&#x1f308";
var bombIcon = "&#x2620";
var game = false;

function treasure(location) {
    if (game === true) {
        alert("Restart the game");
        return;
    }

    if (document.getElementById(location).innerHTML === "❓") {
        counter--;
    }

    if (counter < 0) {
        document.getElementById('result').innerHTML = "You ran out of turns! Restart the game."
        game = true;
        return counter = 0;
    } else if (rainbow === location) {
        document.getElementById(location).innerHTML = rainbowIcon;
        document.getElementById('result').innerHTML = "TREASURE FOUND!"
        game = true;
    } else if (bomb === location) {
        document.getElementById(location).innerHTML = bombIcon;
        document.getElementById('result').innerHTML = "YOU BOMBED!"
        game = true;
    } else {
            document.getElementById(location).innerHTML = treeIcon;
        }

    document.getElementById('clicks').innerHTML = `Turns: ${counter}`;
};
