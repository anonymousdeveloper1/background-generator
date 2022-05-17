const colorOne = document.querySelector(".color-1");
const colorTwo = document.querySelector(".color-2");
const body = document.getElementById("body");
var cssCode = document.querySelector(".css-code");

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
  cssCode.textContent = body.style.background + ";";
};

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);
