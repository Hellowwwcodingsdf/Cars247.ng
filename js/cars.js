let carInfoModal = document.getElementById("carInfoModal");
let carModalClose = document.getElementById("carModalClose");
let carInfoBtn = document.querySelectorAll(".seeCarInfo");

carModalClose.addEventListener("click", () => {
  carInfoModal.classList.add("d-none");
});

const openCarModal = (item) => {
  carInfoModal.classList.remove("d-none");
};

carInfoBtn.forEach((item) => {
  item.addEventListener("click", openCarModal);
});
