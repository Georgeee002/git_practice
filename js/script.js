document.addEventListener("DOMContentLoaded", function () {
    // Newsletter Form Toggle Function
    function showNewsletterForm() {
        var form = document.getElementById("newsletter-form");
        if (form) {
            form.classList.toggle("hidden");
        }
    }

    // Attach event listener to "Get a Free Chapter" button
    const getFreeChapterBtn = document.getElementById("get-free-chapter-btn");
    if (getFreeChapterBtn) {
        getFreeChapterBtn.addEventListener("click", showNewsletterForm);
    }

    // Newsletter Form Submission Handling
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (email === "" || !email.includes("@")) {
                alert("Please enter a valid email address.");
            } else {
                alert("Thank you for subscribing!");
                form.reset();
            }
        });
    }

    // Scroll-to-top Button Handling
    const scrollTopButton = document.getElementById("scroll-top");
    if (scrollTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTopButton.style.display = "block";
            } else {
                scrollTopButton.style.display = "none";
            }
        });

        scrollTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const getFreeChapterBtn = document.querySelector(".cta-newsletter");

    if (getFreeChapterBtn) {
        getFreeChapterBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default behavior (optional)
            
            // Create a hidden link element
            const link = document.createElement("a");
            link.href = "pdf/free-chapter.pdf";
            link.setAttribute("download", "free-chapter.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});