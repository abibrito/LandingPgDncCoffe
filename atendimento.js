//Modal
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-mdl");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide')
}

[openModal, closeModal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


//Buttons Cards
const btt = document.querySelector(".btt");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");

card1.addEventListener('mouseout', () => {btt1.style.visibility = "hidden"})
card1.addEventListener('mouseover', () => {btt1.style.visibility = "visible"})

card2.addEventListener('mouseout', () => {btt2.style.visibility = "hidden"})
card2.addEventListener('mouseover', () => {btt2.style.visibility = "visible"})

card3.addEventListener('mouseout', () => {btt3.style.visibility = "hidden"})
card3.addEventListener('mouseover', () => {btt3.style.visibility = "visible"})

card4.addEventListener('mouseout', () => {btt4.style.visibility = "hidden"})
card4.addEventListener('mouseover', () => {btt4.style.visibility = "visible"})
