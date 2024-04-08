//index.js variables
const navBtn = document.getElementById("navBtn");
let navBar = document.getElementById("navBar");

//dashboard.js variables
let closeNavBtn = document.getElementById("close-nav-btn");
let sideBar = document.getElementById("sidebar");
let dashboard = document.getElementById("dashboard");
let sideBarElements = document.getElementsByClassName("sideBarElement");
let dashboardNavLinks = document.querySelectorAll(".nav-links-2");
let dashboardLink = document.getElementById("dashboardLink");
let salesHistoryLink = document.getElementById("salesHistoryLink");
let carInventoryLink = document.getElementById("carInventoryLink");
let navLogoBlack = document.getElementById("nav-logo-black");
let navBtnBlack = document.getElementById("navBtnBlack");
let xMark = document.getElementById("xMark");
let imgDropdown = document.getElementById("imgDropdown");
let dropdownMenu = document.getElementById("dropdownMenu");
let listCarBtn = document.getElementById("listCarBtn");
let editCarsBtn = document.getElementById("editCarInventory");
let listNewCarModal = document.getElementById("listNewCarModal");
let editCarsModal = document.getElementById("editCarsModal");
let dashy = document.getElementById("dashy");
let editCarForm = document.getElementById("editCarForm");
let editCar1 = document.getElementById("editCar1");

//login.js variables
const forgotPassOpen = document.getElementById("forgotPassword");
const forgotPassModal = document.getElementById("forgotPassModal");
const forgotPassClose = document.getElementById("forgotPassClose");

//cars.js variables
let carInfoModal = document.getElementById("carInfoModal");
let carModalClose = document.getElementById("carModalClose");
let carInfoBtn = document.querySelectorAll(".seeCarInfo");
let carsBody = document.getElementById("carsBody");
let carsNav = document.getElementById("carsNav");

export {
  navBtn,
  navBar,
  closeNavBtn,
  sideBar,
  dashboard,
  sideBarElements,
  dashboardNavLinks,
  dashboardLink,
  salesHistoryLink,
  carInventoryLink,
  navLogoBlack,
  navBtnBlack,
  xMark,
  imgDropdown,
  dropdownMenu,
  listCarBtn,
  editCarsBtn,
  listNewCarModal,
  editCarsModal,
  dashy,
  editCarForm,
  editCar1,
  forgotPassOpen,
  forgotPassModal,
  forgotPassClose,
  carInfoModal,
  carModalClose,
  carInfoBtn,
  carsBody,
  carsNav,
};