document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".sidebar li:first-child a"); 
  const menuLinks = document.querySelectorAll(".sidebar li a");
  const navbar = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  // Toggle sidebar
  function showSidebar() {
    sidebar.classList.add("active");
  }

  function hideSidebar() {
    sidebar.classList.remove("active");
  }

  if (menuButton) menuButton.addEventListener("click", showSidebar);
  if (closeButton) closeButton.addEventListener("click", hideSidebar);

  menuLinks.forEach(link => {
    link.addEventListener("click", hideSidebar);
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger toggle (if separate functionality is needed)
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  }

  // JavaScript to handle smooth scrolling to class sections
document.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior
    
    const targetClass = this.getAttribute('href').substring(1); // Get the class name from href (without the #)
    const targetElement = document.querySelector(`.${targetClass}`); // Find the element with that class
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Scroll to the top of the target element
        behavior: 'smooth' // Smooth scroll
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
});
