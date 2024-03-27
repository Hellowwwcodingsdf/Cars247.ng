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

//Navbar should minimize when the button is clicked and maximize if it is clicked again
closeNavBtn.addEventListener("click", () => {
  if (sideBar.style.width === "6%") {
    sideBar.classList.add("col-3");
    sideBar.style.width = "auto";
    dashboard.classList.remove("col-11");
    dashboard.classList.add("col-9");
    dashboard.style.width = "75%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "inline-block";
    }
  } else {
    sideBar.classList.remove("col-3");
    sideBar.style.width = "6%";
    dashboard.classList.remove("col-9");
    dashboard.style.display = "inline-block";
    dashboard.style.width = "94%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "none";
    }
  }
});

//Open Navbar overlay when the nav button is clicked in mobile
navBtnBlack.addEventListener("click", () => {
  sideBar.classList.remove("d-none");
  navLogoBlack.classList.remove("sticky-top");
  sideBar.style.zIndex = "10000";
  sideBar.style.paddingBottom = "100px";
  sideBar.classList.remove("col-3");
  sideBar.classList.add("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgba(61, 74, 62, 0.8)";
  sideBar.style.backdropFilter = "blur(15px)";
  xMark.classList.remove("d-none");
  closeNavBtn.style.display = "none";
});
//Close Navbar overlay when the x mark is clicked in mobile
xMark.addEventListener("click", () => {
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  sideBar.classList.add("col-3");
  sideBar.classList.remove("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgb(61, 74, 62)";
  sideBar.style.backdropFilter = "";
  xMark.classList.add("d-none");
  closeNavBtn.style.display = "inline-block";
});

// Change the active nav link when either is clicked
dashboardLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  dashboardLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
});
salesHistoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  salesHistoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
});
carInventoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  carInventoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
});

//On scrolling the page, the highlighted link should be the one for the section in view
window.addEventListener("scroll", () => {
  let mainDashboardHeight =
    document.getElementById("mainDashboard").clientHeight;
  let salesHistoryHeight = document.getElementById("salesHistory").clientHeight;
  let carInventoryHeight = mainDashboardHeight + salesHistoryHeight;
  let currentScrollHeight = window.scrollY;

  if (currentScrollHeight >= carInventoryHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    carInventoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight >= mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    salesHistoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight < mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    dashboardLink.classList.add("active-nav-link");
  }
});
