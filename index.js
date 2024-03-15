const navBtn = document.getElementById("navBtn");
navBtn.style.cursor = "pointer";
document.getElementById("navBar").style.display = "none";

navBtn.addEventListener("click", () => {
  let navBar = document.getElementById("navBar");
  if ((navBar.style.display === "none")) {
    navBar.style.display = "block";
    console.log(navBar.style.display);
  } else {
    navBar.style.display = "none";
    console.log(navBar.style.display);
  }
});
