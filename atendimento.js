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