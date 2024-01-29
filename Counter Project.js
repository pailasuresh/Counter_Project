let first = document.getElementById("number");

function plusone() {
    let value = first.textContent;
    let update = parseInt(value) + 1;
    first.textContent = update;
    if (update > 0) {
        first.style.color = "green";

    } else if (update < 0) {
        first.style.color = "red";

    } else {
        first.style.color = "black";
    }
}

function minusone() {
    let value = first.textContent;
    let update = parseInt(value) - 1;
    first.textContent = update;
    if (update > 0) {
        first.style.color = "green";

    } else if (update < 0) {
        first.style.color = "red";

    } else {
        first.style.color = "black";
    }
}

function paila() {
    first.textContent = 0;
    first.style.color = "black";
}