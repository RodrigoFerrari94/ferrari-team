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
/*const cashPositive = document.querySelectorAll(".cash--positive");
const cashNegative = document.querySelectorAll(".cash--negative");



let cashSumPositive = 0;
let cashSumNegative = 0;
const cashTotal = -2680.39;
const cashToModific = document.querySelectorAll(".cash");

cashToModific.forEach((element) => {
  element.textContent = `R$${cashTotal}`;
}); */
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

// Soma os valores positivos
cashPositiveElements.forEach((element) => {
  const textoElemento = element.textContent.trim();
  const match = textoElemento.match(/(\d+([.,]\d+)?)/); // Procura por um ou mais dígitos, seguidos opcionalmente por um separador decimal e mais dígitos

  if (match && match[1]) {
    const valorStr = match[1]; // O valor numérico capturado pelo grupo
    const valorNum = parseFloat(valorStr.replace(",", "."));
    if (!isNaN(valorNum)) {
      cashSumPositive += valorNum;
    }
  }
});

cashNegativeElements.forEach((element) => {
  const textoElemento = element.textContent.trim();
  const match = textoElemento.match(/(\d+([.,]\d+)?)/); // Procura por um ou mais dígitos, seguidos opcionalmente por um separador decimal e mais dígitos

  if (match && match[1]) {
    const valorStr = match[1]; // O valor numérico capturado pelo grupo
    const valorNum = parseFloat(valorStr.replace(",", "."));
    if (!isNaN(valorNum)) {
      cashSumNegative += valorNum;
    }
  }
});

// Formata os totais positivo e negativo
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

const cashTotalManual = "R$-2680,39";

cashTotalElements.forEach((element) => {
  element.textContent = cashTotalManual;
});

cashTotalElementsAuto.forEach((element) => {
  element.textContent = cashTotalFormatado;
});
