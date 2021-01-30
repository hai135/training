var planets = {
  mercury: 3.7,
  venus: 9.87,
  earth: 9.8,
  mars: 3.93,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15,
  pluto: 0.62,
  moon: 1.62,
  sun: 274,
};
// check invalid value :))
function isNumber(val) {
  return val === +val;
}

function myfunction() {
  let isChoosed = document.getElementById("planet").value;
  let inputValue = parseFloat(document.getElementById("c-kg").value);
  if (isChoosed !== "select-planet" && isNumber(inputValue)) {
    document
      .querySelector(".display-image")
      .setAttribute("src", `./images/${isChoosed}.png`);
    document.getElementsByClassName("info")[0].innerHTML = `weight: ${
      inputValue * planets[isChoosed]
    }`;
  } else {
    document.getElementsByClassName(
      "info"
    )[0].innerHTML = `YOUR INPUT <br> must be a number and a planet`;
  }
}
