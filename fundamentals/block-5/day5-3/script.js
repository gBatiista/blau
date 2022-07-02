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

function createHolidayButton(feriados) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");

  button.innerText = feriados;
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
}

createHolidayButton("Feriados");

let holidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener("click", changeHolidayColor);

function changeHolidayColor() {
  let holidays = document.querySelectorAll(".holiday");

  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === "red") {
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[index].style.backgroundColor = "red";
    }
  }
}
