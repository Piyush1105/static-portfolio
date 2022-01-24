"use Strict";

const navigation = document.querySelectorAll(".nav-link");
const display = document.querySelectorAll(".section-display");

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", function () {
    for (let j = 0; j < navigation.length; j++) {
      navigation[j].classList.remove("active-link");
      display[j].classList.remove("active-section");
    }
    navigation[i].classList.add("active-link");
    display[i].classList.add("active-section");
  });
}
