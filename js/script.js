document.addEventListener("DOMContentLoaded", function () {
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

    const scrollTopButton = document.getElementById("scroll-top");

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
            behavior: "smooth"
        });
    });
});