let carInfoModal = document.getElementById("carInfoModal");
let carModalClose = document.getElementById("carModalClose");
let carInfoBtn = document.querySelectorAll(".seeCarInfo");
let carsBody = document.getElementById('carsBody')

carModalClose.addEventListener("click", () => {
  carInfoModal.classList.add("d-none");
  carsBody.classList.remove("d-none");
});

const openCarModal = () => {
  carInfoModal.classList.remove("d-none");
    carsBody.classList.add("d-none");
};

carInfoBtn.forEach((item) => {
  item.addEventListener("click", openCarModal);
});
