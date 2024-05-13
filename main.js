const icons = document.querySelectorAll(".section__title-icon");

document.addEventListener("DOMContentLoaded", function() {
  
    icons.forEach(icon => {
      icon.addEventListener("click", function() {
        const currentSrc = this.getAttribute("src");
        if (currentSrc === "img/heart.svg") {
          this.setAttribute("src", "img/yellowIcon.svg");
        } else {
          this.setAttribute("src", "img/heart.svg");
        }
      });
    });
  });
  