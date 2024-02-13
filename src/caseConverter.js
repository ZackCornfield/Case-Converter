
let textInput = document.getElementById("text-input");

document.getElementById("upper-case").addEventListener("click", () => {
    textInput.value = textInput.value.toUpperCase();
} );

document.getElementById("lower-case").addEventListener("click", () => {
    textInput.value = textInput.value.toLowerCase();
} );

document.getElementById("proper-case").addEventListener("click", () => {
    let text = textInput.value.toLowerCase();
    textInput.value = text.replace(/(^|\s)\w/g, (char) => char.toUpperCase());
});

document.getElementById("sentence-case").addEventListener("click", () => {
    let text = textInput.value.toLowerCase();
    textInput.value = text.replace(/(^\w|\.\s+\w)/gm, (char) => char.toUpperCase());
} );

document.getElementById("save-text-file").addEventListener("click", () => {
    download("text.txt", textInput.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}