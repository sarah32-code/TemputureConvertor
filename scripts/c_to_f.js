"use strict";

const convertBtn = document.getElementById("convertBtn");
const celsiusField = document.getElementById("number1Field");
const answerField = document.getElementById("answerField");

window.onload = init;

function init() {
    convertBtn.onclick = onConvertBtnClicked;
}

function onConvertBtnClicked() {
    let celsius = parseFloat(celsiusField.value);
    let fahrenheit = (celsius * 1.8) + 32;
    answerField.value = fahrenheit;
}
