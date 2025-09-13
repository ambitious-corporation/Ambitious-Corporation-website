document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navbarNav = document.getElementById("navbarNav");

    // Add class when the animation starts opening
    navbarNav.addEventListener('show.bs.collapse', function () {
        navbar.classList.add('menu-open');
    });

    // Remove class when the animation starts closing
    navbarNav.addEventListener('hide.bs.collapse', function () {
        navbar.classList.remove('menu-open');
    });
});
// ============counter code=============
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 150; 

    const options = {
        root: null,
        threshold: 0.5, 
    };

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "+";
        let count = 0;
        const increment = target / speed;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));
});
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const toggler = navbar.querySelector(".navbar-toggler");
    const collapse = document.getElementById("navbarNav");

    collapse.addEventListener('show.bs.collapse', function () {
        navbar.classList.add("menu-open");
    });

    collapse.addEventListener('hide.bs.collapse', function () {
        navbar.classList.remove("menu-open");
    });
});
// Opens sticky-chat automatically within 5 seconds of page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("offchat-menu").checked = true;
  }, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("whatsapp-message");
    const button = document.getElementById("whatsapp-button");
    const phoneNumber = "8488927642"; // your WhatsApp number

    button.addEventListener("click", function(e) {
        const message = encodeURIComponent(input.value.trim());
        
        if(message) {
            button.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        } else {
            e.preventDefault(); // prevent sending empty messages
            alert("Please type a message before sending.");
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submission
    
    const form = this;
    const successMessage = document.getElementById("success-message");

    // Create FormData and send using fetch
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            successMessage.style.display = "block"; // show success message
            form.reset(); // clear the form fields
        } else {
            response.json().then(data => {
                alert("There was an error submitting the form.");
            });
        }
    }).catch(error => {
        alert("There was an error submitting the form.");
    });
});

AOS.init({
  duration: 1000, // animation duration in ms
  easing: 'ease-in-out',
  once: false, // animation only once
});
