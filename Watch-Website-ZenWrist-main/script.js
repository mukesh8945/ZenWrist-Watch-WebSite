function toggleAnswer(answerId, iconId) {
    var answer = document.getElementById(answerId);
    var icon = document.getElementById(iconId);

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove('open');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.add('open');
    }
  }

  function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove",function(dets) {
    crsr.style.left = dets.x + -15 + "px";
    crsr.style.top = dets.y +-5 + "px";
})



document.addEventListener("DOMContentLoaded", function () {
    // Set up GSAP timeline
    var tl = gsap.timeline();

    // Animation for the main content
    tl.from(".about-section", { opacity: 0, duration: 1, ease: "power2.inOut" });
    tl.from(".testimonials-section", { opacity: 0, duration: 4, ease: "power2.inOut" });

  });

