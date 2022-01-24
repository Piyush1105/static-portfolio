"use Strict";

const navigation = document.querySelectorAll(".nav-link");
const display = document.querySelectorAll(".section-display");

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", function () {
    const innerText = navigation[i].textContent.toLowerCase();

    const section = document
      .querySelector("#" + innerText)
      .classList.contains("active");

    if (section === false) {
      navigation[i].classList.add("active");
      display[i].classList.add("active");
      document.querySelector("#" + innerText).classList.add("active");
      for (let j = 0; j < navigation.length; j++) {
        if (j !== i) {
          navigation[j].classList.remove("active");
          display[j].classList.remove("active");
        }
      }
    }
  });
}
