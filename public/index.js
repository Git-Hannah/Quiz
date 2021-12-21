console.log("Hello World!");
//console.log(document.location);

// document.addEventListener("click", ev => {
// 	console.log({ name: "Hannah" });
// });


//Button Answer Showing One Button
// const button = document.querySelector("button");
// console.log(button);

// const answer = document.querySelector(".qcard-answer");
// console.log(answer);

// const buttonSelected = "qcard-button--clicked";
// const answerShowing = "qcard-answer--showing";

// button.addEventListener("click", ev => {
//     answer.classList.toggle(answerShowing);
// });





// Answer Toggle
const buttons = document.querySelectorAll(".qcard-button");
const answer = document.querySelectorAll(".qcard-answer");
const answerShowing = "qcard-answer--showing";

buttons.forEach((button, index) => {
    button.addEventListener("click", ev => {
        answer[index].classList.toggle(answerShowing);
    });
});


//Bookmark Toggle
const qcards = document.querySelectorAll('.js-qcard');

qcards.forEach((qcard) => {
    const bookmark = qcard.querySelector(".qcard-bm");
    //const bookmarkIcon = bookmark.querySelector('.qcard-bm-icon');
    const bookmarked = "qcard-bm--checked";
    //Toggle Bookmark selection
    bookmark.addEventListener("click", () => {
        bookmark.classList.toggle(bookmarked);
    });
});







// //Toggle both Answer and Bookmark:
// const qcards = document.querySelectorAll('.js-card');

// //Modifier classes
// const answerShowing = "qcard-answer--showing";
// const bookmarked = "qcard-bm--checked";

// qcards.forEach(qcard => {
//     //Answers
//     const showAnswer = qcard.querySelector(".qcard-answer");
//     const 


//     //Bookmarks
//     const bookmark = qcard.querySelector(".qcard-bm");
//     //Toggle Bookmark selection
//     bookmark.addEventListener("click", () => {
//         bookmark.classList.toggle(bookmarked);
//     });

// });



