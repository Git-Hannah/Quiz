console.log("Hello World!");
console.log(document.location);

// document.addEventListener("click", ev => {
// 	console.log({ name: "Hannah" });
// });


//Button Answer Showing
const button = document.querySelector("button");
console.log(button);

const answer = document.querySelector(".qcard-answer");
console.log(answer);

const buttonSelected = "qcard-button--clicked";
const answerShowing = "qcard-answer--showing";

button.addEventListener("click", ev => {
    answer.classList.toggle(answerShowing);
});

//Navbar Toggle
const footer = document.querySelector(".footer");
console.log(footer);

const navbar = document.querySelector(".navbar");
console.log(navbar);

//const navbarSelected = "footer--clicked";
const navbarShowing = "navbar--showing";

footer.addEventListener("click", ev => {
    navbar.classList.toggle(navbarShowing);
});