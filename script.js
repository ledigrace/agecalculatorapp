const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");

const yearsOutput = document.getElementById("yearsOutput");
const monthsOutput = document.getElementById("monthsOutput");
const daysOutput = document.getElementById("daysOutput");

const ageCalculatorForm = document.getElementById("ageCalculatorForm");

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = 1 + currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required.";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("small").innerText = "Must be a valid month.";
      validator = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "red";
      dayInput.parentElement.querySelector("small").innerText = "Must be a valid day.";
      validator = false;
    } else {
      input.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(event) {
  event.preventDefault();
  if (validate()) {
    if (dayInput.value > currentDay) {
      currentDay = currentDay + months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (monthInput.value > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    const days = currentDay - dayInput.value;
    const months = currentMonth - monthInput.value;
    const years = currentYear - yearInput.value;

    yearsOutput.innerHTML = years;
    monthsOutput.innerHTML = months;
    daysOutput.innerHTML = days;
  }
}

ageCalculatorForm.addEventListener("submit", handleSubmit);
