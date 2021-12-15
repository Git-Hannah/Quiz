console.log("Hello World!");
console.log(document.location);

button.addEventListener("click", ev => {
	console.log({ name: "Hannah" });
});

const button = document.querySelector("button");
console.log(button);

const answer = document.querySelector(".qcard-answer");
console.log(answer);

const buttonSelected = "qcard-button--clicked";
const answerShowing = "qcard-answer--showing";

button.addEventListener("click", ev => {
    answer.classList.toggle(answerShowing);
});