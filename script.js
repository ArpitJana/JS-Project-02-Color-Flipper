const body = document.querySelector("body");
const getNewColorBtn = document.getElementById("getNewColorBtn");
const colorBox = document.getElementById("colorBox");


const hexChars = '0123456789ABCDEF';

getNewColorBtn.addEventListener('click', () => {
    let hexColorCode = '#';
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hexChars.length);
        hexColorCode += hexChars.charAt(randomNumber);
    }
    body.style.backgroundColor = hexColorCode;

    colorBox.innerHTML = `Background Color : <span>${hexColorCode}</span>`;
})


function generateHexColorCode() {

}