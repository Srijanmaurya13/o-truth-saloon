
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Demo booking form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const date = document.getElementById("bookingDate").value;
    const service = document.getElementById("service").value;

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("bookingMessage").textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(date + "T00:00:00") < today) {
        document.getElementById("bookingMessage").textContent =
            "Please select today or a future date.";
        return;
    }

    document.getElementById("bookingMessage").textContent =
        "Demo successful! " + name +
        ", your " + service +
        " appointment form is working.";

    bookingForm.reset();
});
