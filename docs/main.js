"use strict";

const dropdown = document.querySelector(".dropdown");
const trigger = dropdown.querySelector(".dropdown__trigger");
const content = dropdown.querySelector(".dropdown__content");

content.style.display = "none";

trigger.addEventListener("click", (event) => {
  event.preventDefault();

  content.style.display = "block";

  dropdown.classList.toggle("dropdown--active");
});

document.addEventListener("click", (event) => {
  if (!trigger.contains(event.target)) {
    dropdown.classList.remove("dropdown--active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const meses = document.querySelectorAll(".cash-flow__mes");
  const tabelas = document.querySelectorAll(".cash-flow__table");

  meses.forEach((mes, index) => {
    mes.addEventListener("click", function () {
      tabelas.forEach((tabela) => {
        tabela.classList.remove("cash-flow__table--active");
      });
      tabelas[index].classList.add("cash-flow__table--active");
    });
  });
});

const cashPositiveElements = document.querySelectorAll(".cash--positive");
const cashNegativeElements = document.querySelectorAll(".cash--negative");
const cashPositiveTotalElement = document.querySelector(
  ".cash--positive-total"
);
const cashNegativeTotalElement = document.querySelector(
  ".cash--negative--total"
);
const cashTotalElements = document.querySelectorAll(".cash-manual");
const cashTotalElementsAuto = document.querySelectorAll(".cash-auto");

let cashSumPositive = 0;
let cashSumNegative = 0;

cashPositiveElements.forEach((element) => {
  const textoElemento = element.textContent.trim();
  const match = textoElemento.match(/(\d+([.,]\d+)?)/);

  if (match && match[1]) {
    const valorStr = match[1];
    const valorNum = parseFloat(valorStr.replace(",", "."));
    if (!isNaN(valorNum)) {
      cashSumPositive += valorNum;
    }
  }
});

cashNegativeElements.forEach((element) => {
  const textoElemento = element.textContent.trim();
  const match = textoElemento.match(/(\d+([.,]\d+)?)/);

  if (match && match[1]) {
    const valorStr = match[1];
    const valorNum = parseFloat(valorStr.replace(",", "."));
    if (!isNaN(valorNum)) {
      cashSumNegative += valorNum;
    }
  }
});
const cashSumPositiveFormatado = `R$${cashSumPositive
  .toFixed(2)
  .replace(".", ",")}`;
const cashSumNegativeFormatado = `R$${cashSumNegative
  .toFixed(2)
  .replace(".", ",")}`;

const cashTotal = cashSumPositive - cashSumNegative;
const cashTotalFormatado = `R$${cashTotal.toFixed(2).replace(".", ",")}`;

if (cashPositiveTotalElement) {
  cashPositiveTotalElement.textContent = cashSumPositiveFormatado;
}

if (cashNegativeTotalElement) {
  cashNegativeTotalElement.textContent = cashSumNegativeFormatado;
}

const cashTotalManual = "R$-430,61";

cashTotalElements.forEach((element) => {
  element.textContent = cashTotalManual;
  if (cashTotalManual.includes("-")) {
    element.classList.add("cash--negative-result");
    element.classList.remove("cash--positive-result");
    return;
  }

  element.classList.add("cash--positive-result");
  element.classList.remove("cash--negative-result");
});

cashTotalElementsAuto.forEach((element) => {
  element.textContent = cashTotalFormatado;
  if (cashTotal < 0) {
    element.classList.add("cash--negative-result");
    element.classList.remove("cash--positive-result");
    return;
  }

  element.classList.add("cash--positive-result");
  element.classList.remove("cash--negative-result");
});
