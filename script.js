const question_button = document.getElementsByClassName("question-button");
const arrow = document.querySelectorAll(".arrow");
const question = document.querySelectorAll(".question");
const answer = document.getElementsByClassName("question-answer");

for (let i = 0; i < question_button.length; i++) {
    question_button[i].addEventListener("click", () => {
        closeOthers();
        openThis(i);
    });
}

function openThis(i) {
    arrow[i].style.transform = "rotateX(180deg)";
    question[i].style.fontWeight = "700";
    answer[i].style.maxHeight = "5rem";
    answer[i].style.display = "block";
}

function closeOthers() {
    for (let i = 0; i < question_button.length; i++) {
    arrow[i].style.transform = "rotateX(0deg)";
    question[i].style.fontWeight = "500";
    answer[i].style.maxHeight = "0";
    answer[i].style.display = "none";
    }
}

