document.getElementById("toggle-button").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu.style.display === "none" || navMenu.style.display === "") {
    navMenu.style.display = "block";
    // show the menu
  } else {
    navMenu.style.display = "none"; // Hide the menu
  }
});

// function for screen-size responsiveness
function toggleNavbar() {
  var links = document.getElementById("navbar-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

// function to handle window resize
function handleResize() {
  var links = document.getElementById("navbar-links");
  if (window.innerWidth > 1024) {
    links.style.display = "block"; // show links on larger screens
  } else {
    links.style.display = "none"; // hide links on smaller screens
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

$("#myCarousel").carousel({
  interval: false,
});

/* Loop through all dropdown buttons to toggle between hiding and 
showing its dropdown content - This allows the user to have multiple
dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}