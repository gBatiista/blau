// ========= Background Color =========

let body = document.querySelector("body");

let bgColorButton = document.getElementById("btn-bg-color");
let bgInput = document.getElementById("bg-color");

bgColorButton.addEventListener("click", changeBgColor);
bgInput.addEventListener("keyup", changeBgColorKey);

function changeBgColor() {
  body.style.backgroundColor = bgInput.value;
  localStorage.setItem("bgColor", bgInput.value);

  bgInput.value = "";
}

function changeBgColorKey(event) {
  if (event.key === "Enter") {
    body.style.backgroundColor = bgInput.value;
    localStorage.setItem("bgColor", bgInput.value);

    bgInput.value = "";
  }
}

// ========= Text Color =========

let colorInput = document.getElementById("text-color");
let colorButton = document.getElementById("btn-text-color");

colorInput.addEventListener("keyup", fontColorKey);
colorButton.addEventListener("click", fontColor);

function fontColor() {
  body.style.color = colorInput.value;
  localStorage.setItem("fontColor", colorInput.value);

  colorInput.value = "";
}

function fontColorKey(event) {
  if (event.key === "Enter") {
    body.style.color = colorInput.value;
    localStorage.setItem("fontColor", colorInput.value);

    colorInput.value = "";
  }
}

// ========= Font Size =========

let fontSizeButton = document.getElementById("btn-font-size");
let fontSizeInput = document.getElementById("font-size");

fontSizeButton.addEventListener("click", changeFontSize);
fontSizeInput.addEventListener("keyup", changeFontSizeKey);

function changeFontSize() {
  body.style.fontSize = fontSizeInput.value + "px";
  localStorage.setItem("fontSize", fontSizeInput.value);

  fontSizeInput.value = "";
}

function changeFontSizeKey(event) {
  if (event.key === "Enter") {
    body.style.fontSize = fontSizeInput.value + "px";
    localStorage.setItem("fontSize", fontSizeInput.value);

    fontSizeInput.value = "";
  }
}

// ========= Line Height =========

let lineHeightButton = document.getElementById("btn-line-height");
let lineHeightInput = document.getElementById("line-height");

lineHeightButton.addEventListener("click", changeLineHeight);
lineHeightInput.addEventListener("keyup", changeLineHeightKey);

function changeLineHeight() {
  body.style.lineHeight = lineHeightInput.value + "px";
  localStorage.setItem("lineHeight", lineHeightInput.value);

  lineHeightInput.value = "";
}

function changeLineHeightKey(event) {
  if (event.key === "Enter") {
    body.style.lineHeight = lineHeightInput.value + "px";
    localStorage.setItem("lineHeight", lineHeightInput.value);

    lineHeightInput.value = "";
  }
}

// ========= Font Family =========

let fontFamilyButton = document.getElementById("btn-font-family");
let fontFamilyInput = document.getElementById("font-family");

fontFamilyButton.addEventListener("click", changeFontFamily);
fontFamilyInput.addEventListener("keyup", changeFontFamilyKey);

function changeFontFamily() {
  body.style.fontFamily = fontFamilyInput.value;
  localStorage.setItem("fontFamily", fontFamilyInput.value);

  fontFamilyInput.value = "";
}

function changeFontFamilyKey(event) {
  if (event.key === "Enter") {
    body.style.fontFamily = fontFamilyInput.value;
    localStorage.setItem("fontFamily", fontFamilyInput.value);

    fontFamilyInput.value = "";
  }
}

// ========= Local Storage =========

window.onload = function () {
  if (localStorage.getItem("bgColor") !== null) {
    body.style.backgroundColor = localStorage.getItem("bgColor");
  }

  if (localStorage.getItem("fontColor") !== null) {
    body.style.color = localStorage.getItem("fontColor");
  }

  if (localStorage.getItem("fontSize") !== null) {
    body.style.fontSize = localStorage.getItem("fontSize") + "px";
  }

  if (localStorage.getItem("lineHeight") !== null) {
    body.style.lineHeight = localStorage.getItem("lineHeight") + "px";
  }

  if (localStorage.getItem("fontFamily") !== null) {
    body.style.fontFamily = localStorage.getItem("fontFamily");
  }
};
