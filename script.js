const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Makasih udah pernah jadi orang yang paling ku sayang.";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/temaaciii.gif";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/6282260946344?I Love u and always=reply%20message%20whatever";
  }
});