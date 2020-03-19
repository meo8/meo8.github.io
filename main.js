const homeIcon = document.getElementById("homeIcon");
const aboutTab = document.getElementById("aboutTab");
const homeTab = document.getElementById("homeTab");

function smoothScrollAboutSection(e) {
  // if it wasn't for the preventDefault, the scroll wouldn't work
  e.preventDefault();
  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });

  // Scroll certain amounts from current position
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });

  // Scroll to a certain element
  document.querySelector('#intro').scrollIntoView({
    behavior: 'smooth'
  });
}

function smoothScrollTop(e) {
  // if it wasn't for the preventDefault, the scroll wouldn't work
  e.preventDefault();
  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });

  // Scroll certain amounts from current position
  window.scrollBy({
    top: -100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });

  // Scroll to a certain element
  document.querySelector('#top').scrollIntoView({
    behavior: 'smooth'
  });
}

homeIcon.addEventListener("click", smoothScrollAboutSection);
aboutTab.addEventListener("click", smoothScrollAboutSection);
homeTab.addEventListener("click", smoothScrollTop);

// toggle nav-items for active class
const navItems = document.getElementsByClassName("nav-item");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
