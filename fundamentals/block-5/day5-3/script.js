function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

for (let day of decemberDaysList) {
  let ul = document.getElementById("days");
  let li = document.createElement("li");

  li.className = "day";
  li.innerText = day;
  ul.appendChild(li);

  if (day === 24 || day === 25 || day === 31) {
    li.classList.add("holiday");
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.classList.add("friday");
  }
}

function createButton(nome, id) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");

  button.innerText = nome;
  button.id = id;
  buttonsContainer.appendChild(button);
}

createButton("Feriados", "btn-holiday");

let holidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener("click", changeHolidayColor);

function changeHolidayColor() {
  let holidays = document.querySelectorAll(".holiday");

  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].classList.contains("mark-holiday")) {
      holidays[index].classList.remove("mark-holiday");
    } else {
      holidays[index].classList.add("mark-holiday");
    }
  }
}

createButton("Sexta-feira", "btn-friday");

let fridayButton = document.getElementById("btn-friday");
fridayButton.addEventListener("click", changeFriday);

let originalFriday = [];
let fridays = document.querySelectorAll(".friday");

for (let index = 0; index < fridays.length; index += 1) {
  originalFriday.push(fridays[index].innerText);
}

function changeFriday() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === "SEXTOU!!!") {
      fridays[index].innerText = originalFriday[index];
    } else {
      fridays[index].innerText = "SEXTOU!!!";
    }
  }
}

let days = document.querySelectorAll(".day");

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener("mouseover", zoomPlusAnimation);
}

function zoomPlusAnimation(event) {
  let day = event.target;
  day.classList.add("hover");
}

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener("mouseleave", zoomLessAnimation);
}

function zoomLessAnimation(event) {
  let day = event.target;
  day.classList.remove("hover");
}
