"use strict";

const submitBtn = document.querySelector(".submit--btn");
const formEl = document.getElementById("card-info").elements;
const formBox = document.querySelector(".form-box");
const compFormBox = document.querySelector(".comp-form-box");
const cardInfoForm = document.querySelector("#card-info");

const cardNumbField = document.querySelector("#card-numb");

let imgNumb = document.querySelector(".card-f-number");
let imgHolder = document.querySelector(".card-f-owner");
let imgDate = document.querySelector(".card-f-date");
let imgCvc = document.querySelector(".card-b-cvc");

let cardHolder;
let cardNumb;
let expDate;
let cvc;

const updateText = function (el, el2) {
  if (el !== "" && el !== "/") el2.textContent = el;
};

/* UPDATE CARD ON THE IMAGES */

submitBtn.addEventListener("click", function () {
  cardNumb = formEl["cardNumb"].value;
  cardHolder = formEl["cardHolder"].value;
  expDate = `${formEl["expDateM"].value}/${formEl["expDateY"].value}`;
  cvc = formEl["cvc"].value;

  updateText(cardNumb, imgNumb);
  updateText(cardHolder, imgHolder);
  updateText(expDate, imgDate);
  updateText(cvc, imgCvc);
});

/* TOGGLE HIDING AND REPLACING THE FORM */

cardInfoForm.addEventListener("submit", function (e) {
  e.preventDefault;
  compFormBox.classList.toggle("hidden");
  formBox.classList.toggle("hidden");
});

/* DIVIDE THE CREDIT CARD NUMBER INTO SETS OF 4 */

$("#card-numb").on("keyup", function (e) {
  var val = $(this).val();
  var newval = "";
  val = val.replace(/\s/g, "");
  for (var i = 0; i < val.length; i++) {
    if (i % 4 == 0 && i > 0) newval = newval.concat(" ");
    newval = newval.concat(val[i]);
  }
  $(this).val(newval);
});

const maxCharCheck = function (ele, max_chars) {
  $(`#${ele}`).keydown(function (e) {
    if ($(this).val().length >= max_chars) {
      $(this).val($(this).val().substr(0, max_chars));
    }
  });

  $(`#${ele}`).keyup(function (e) {
    if ($(this).val().length >= cvc_max_chars) {
      $(this).val($(this).val().substr(0, max_chars));
    }
  });
};

maxCharCheck("cvc", 2);
maxCharCheck("card-numb", 18);
maxCharCheck("exp-date-m", 1);
maxCharCheck("exp-date-y", 1);
maxCharCheck("card-holder", 30);
