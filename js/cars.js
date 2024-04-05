let carInfoModal = document.getElementById("carInfoModal");
let carModalClose = document.getElementById("carModalClose");
let carInfoBtn = document.querySelectorAll(".seeCarInfo");
let carsBody = document.getElementById("carsBody");
let carsNav = document.getElementById("carsNav");
const carsApi = "https://localhost:7116/api/Cars";

carModalClose.addEventListener("click", () => {
  carInfoModal.classList.add("d-none");
  carsBody.classList.remove("d-none");
  carsNav.classList.remove("d-none");
  window.scrollTo(0, 0);
});

const openCarModal = () => {
  carInfoModal.classList.remove("d-none");
  carsBody.classList.add("d-none");
  carsNav.classList.add("d-none");
};

carInfoBtn.forEach((item) => {
  item.addEventListener("click", openCarModal);
});

// window.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const response = await fetch(carsApi, {
//       method: "GET",
//       mode: "no-cors",
//       headers: {
//         Accept: "*/*",
//       },
//     });
//     if (!response.ok) {
//       throw new Error("Unable to connect to API");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     alert("Unable fetch file. Check internet connection");
//     console.error(err);
//   }
//   console.log(data);
// });
