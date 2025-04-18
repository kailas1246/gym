document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".sidebar li:first-child"); // Close icon
  const menuLinks = document.querySelectorAll(".sidebar li a"); // All menu links

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
  window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
});

// Get elements
const navbar = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar");

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetClass = this.getAttribute('href').substring(1);
      const targetElement = document.querySelector('.' + targetClass);

      if (targetElement) {
          const offset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
          });
      }
  });
});




  // Counter logic
  const counters = document.querySelectorAll(".counter");
  let started = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);

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

  const counterSection = document.getElementById("counter");
  if (counterSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          startCounters();
          started = true;
        }
      });
    }, { threshold: 0.4 });

    observer.observe(counterSection);
  }
