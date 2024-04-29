"use strict";
// f = 9/5 x c +32


const addBtn = document.getElementById("addBtn");

const number1Field = document.getElementById("number1Field");

const answerField = document.getElementById("answerField");

window.onload = init;

function init() {

    addBtn.onclick = onAddBtnClicked;
}

function onAddBtnClicked() {

    let num1 = Number(number1Field.value);

    let answer = (num1 - 32) / 1.8;

    answerField.value = answer;

}