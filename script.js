const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

linGre();

function randomButton() {
  let div = document.createElement("div");
  let h2 = document.querySelector("h2");
  let parentEl = h2.parentNode;
  let button = document.createElement("button");
  body.appendChild(div);
  div.appendChild(button);

  parentEl.insertBefore(div, h2);
  button.append(document.createTextNode("🎲"));
  button.classList.add("random");
}
randomButton();

function setGradient(data) {
  data.addEventListener("input", linGre);
}

function linGre(a1, a2) {
  let c1 = color1.value;
  let c2 = color2.value;

  function grad(a, b) {
    return (body.style.background = `linear-gradient(to right , ${a}, ${b})`);
  }
  grad(c1, c2);
  grad(a1, a2);
  if (a1 && a2) {
    color1.value = a1;
    color2.value = a2;
  } else if (c1 && c2) {
    c1 = color1.value;
    c2 = color2.value;
  }

  // css.textContent = body.style.background + ";";
  const bodyValue = body.style.background;
  const newValue1 = bodyValue.slice(26, -17);
  const newValue2 = bodyValue.slice(-16);
  css.textContent = ` Gradient: ${newValue1} |${newValue2}`;
}

function dice() {
  let randomNumber = Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, "0"); // in case the number is too small to fill 6 hex digits
  let result = "#" + randomNumber;
  return result;
}

body.addEventListener("click", function (event) {
  if (event.target.className !== "random") return;
  let theDice1 = dice();
  let theDice2 = dice();

  linGre(theDice1, theDice2);
});

setGradient(color1);
setGradient(color2);

// function randomColor() {
//   let randomNumber = Math.ceil(Math.random() * 255);
// }

// randomColor();

// function setGradient() {
//   body.style.background =
//     "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
//   css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
