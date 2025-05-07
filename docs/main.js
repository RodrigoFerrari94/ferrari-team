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

const cash = "R$-3815,93";

const cashToModific = document.querySelectorAll(".cash");

// Itera sobre a lista de elementos encontrados
cashToModific.forEach((element) => {
  // Define o textContent de cada elemento com o valor da variável global
  element.textContent = cash;
});
