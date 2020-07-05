// traversing the dom
/*
const btns = document.querySelectorAll(".question-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.parentElement.parentElement;
    styles.classList.toggle("show-text");
  });
});
*/

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btns = question.querySelector(".question-btn");
  btns.addEventListener("click", (e) => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
