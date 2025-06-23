// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load using GSAP
    gsap.from("h2", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.from("button", {
      opacity: 0,
      y: 20,
      delay: 0.5,
      stagger: 0.2,
      duration: 0.8
    });
  
    gsap.from(".gallery-img", {
      opacity: 0,
      scale: 0.8,
      delay: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  
    // Animate cake float bounce on hover
    const cake = document.querySelector('.cake-img');
    if (cake) {
      cake.addEventListener('mouseover', () => {
        gsap.to(cake, { scale: 1.1, duration: 0.3 });
      });
      cake.addEventListener('mouseout', () => {
        gsap.to(cake, { scale: 1.0, duration: 0.3 });
      });
    }
  });
  