let textArea = document.getElementById("text-area");
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");


upperCaseButton.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});

properCaseButton.addEventListener("click", function () {
    let value = textArea.value.toLowerCase();

    let words = value.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    textArea.value = words.join(" ")
});

sentenceCaseButton.addEventListener("click", function () {
    let value = textArea.value.toLowerCase();

    let sentences = value.split(". ");

    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
    }

    textArea.value = sentences.join(". ")
});

saveTextFileButton.addEventListener("click", function () {
    let text = textArea.value;

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});

