
const form = document.querySelector(".card__form");

const rating_state = document.querySelector(".rating-state");
const thanks_you_state = document.querySelector(".thanks-you-state");

const selected = document.querySelector(".display-selected");

form.addEventListener("submit", event => {

    event.preventDefault();

    selected.innerHTML = form.elements.rating.value;

    rating_state.style.display = "none";
    thanks_you_state.style.display = "flex";

})