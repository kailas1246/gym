
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".sidebar li:first-child a"); // Close button link
  const menuLinks = document.querySelectorAll(".sidebar li a"); // All menu links
  const navbar = document.querySelector("nav");

  function showSidebar() {
      sidebar.classList.add("active");
  }

  function hideSidebar() {
      sidebar.classList.remove("active");
  }

  // Show sidebar on menu button click
  menuButton.addEventListener("click", showSidebar);

  // Hide sidebar on close button click
  closeButton.addEventListener("click", hideSidebar);

  // Hide sidebar when clicking any menu link
  menuLinks.forEach(link => {
      link.addEventListener("click", hideSidebar);
  });

  // Change navbar style when scrolling
  window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.1) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});


 const counters = document.querySelectorAll('.counter');
  let started = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100); // Adjust speed

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger when section is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounters();
        started = true;
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.getElementById('counter'));

  
