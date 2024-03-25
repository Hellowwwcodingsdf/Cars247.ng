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

