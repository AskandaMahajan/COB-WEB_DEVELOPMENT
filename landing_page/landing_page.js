
  // Get all elements with the class "card"
  const cards = document.querySelectorAll(".card");

  // Loop through each card and add event listeners
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("card-transition"); // Add the transition class
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-transition"); // Remove the transition class
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });




  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");

    // Get the position of the "What do we Do?" section
    var sectionwhat_do_we_do = document.querySelector("#trending");
    var sectionwhat_do_we_doPosition = sectionwhat_do_we_do.getBoundingClientRect();

    if (sectionwhat_do_we_doPosition.top <= 0) {
      // Add the "sticky-header" class when we scroll past the section
      header.classList.add("sticky-header");
    } else {
      // Remove the "sticky-header" class when scrolling back up
      header.classList.remove("sticky-header");
    }
  });





  const navLinks = document.querySelectorAll('.nav-link');
  
  // Add click event listeners to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent the default link behavior
      event.preventDefault();
  
      // Remove the "active" class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });
  
      // Add the "active" class to the clicked link
      link.classList.add('active');
  
      // Scroll to the target section
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
