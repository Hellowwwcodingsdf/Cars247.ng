let closeNavBtn = document.getElementById("close-nav-btn");
let sideBar = document.getElementById("sidebar");
let sideBar2 = document.getElementById("sidebar2");
let sideBarElements = document.getElementsByClassName("sideBarElement");

//Navbar should minimize when the button is clicked and maximize if it is clicked again
closeNavBtn.addEventListener("click", () => {
  if (sideBar.style.width === "6%") {
    sideBar.classList.add("col-3");
    sideBar.style.width = "auto";
    sideBar2.classList.remove("col-11");
    sideBar2.classList.add("col-9");
    sideBar2.style.width = "75%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "inline-block";
    }
  } else {
    sideBar.classList.remove("col-3");
    sideBar.style.width = "6%";
    sideBar2.classList.remove("col-9");
    sideBar2.style.display = "inline-block";
    sideBar2.style.width = "94%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "none";
    }
  }
});

//On mobile view, navbar should show when button is clicked
let navLogoBlack = document.getElementById("nav-logo-black");
let navBtnBlack = document.getElementById("navBtnBlack");
let xMark = document.getElementById("xMark");

//Open Navbar overlay when the nav button is clicked in mobile
navBtnBlack.addEventListener("click", () => {
  sideBar.classList.remove("d-none");
  sideBar.style.position = "absolute";
  sideBar.classList.remove("col-3");
  sideBar.classList.add("w-100", "shadow-lg");
  sideBar.style.backgroundColor = "rgba(61, 74, 62, 0.8)";
  sideBar.style.backdropFilter = "blur(15px)";
  xMark.classList.remove("d-none");
  closeNavBtn.style.display = "none";
});
//Close Navbar overlay when the x mark is clicked in mobile
xMark.addEventListener("click", () => {
  sideBar.classList.add("d-none");
  sideBar.style.position = "";
  sideBar.classList.add("col-3");
  sideBar.classList.remove("w-100", "shadow-lg");
  sideBar.style.backgroundColor = "rgb(61, 74, 62)";
  sideBar.style.backdropFilter = "";
  xMark.classList.add("d-none");
  closeNavBtn.style.display = "inline-block";
});

//Change the active nav link when either is clicked
let dashboardLink = document.getElementById("dashboardLink");
let salesHistoryLink = document.getElementById("salesHistoryLink");
console.log(salesHistoryLink)
let carInventoryLink = document.getElementById("carInventoryLink");
dashboardLink.addEventListener("click", () => {
  dashboardLink.classList.add("active-nav-link");
    console.log("done");

  salesHistoryLink.classList.remove("active-nav-link");
  carInventoryLink.classList.remove("active-nav-link");
});
salesHistoryLink.addEventListener("click", () => {
  salesHistoryLink.classList.add("active-nav-link");
  dashboardLink.classList.remove("active-nav-link");
  carInventoryLink.classList.remove("active-nav-link");
});
carInventoryLink.addEventListener("click", () => {
  carInventoryLink.classList.add("active-nav-link");
  dashboardLink.classList.remove("active-nav-link");
  salesHistoryLink.classList.remove("active-nav-link");
});

