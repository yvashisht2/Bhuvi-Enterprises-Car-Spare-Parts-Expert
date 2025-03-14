document.addEventListener("DOMContentLoaded", function() {
    // Dynamically populate Car Model Year dropdown
    const carModelYearSelect = document.getElementById("carModelYear");
    const currentYear = new Date().getFullYear();
    const startYear = 2008;

    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        carModelYearSelect.appendChild(option);
    }
});


document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const carMake = document.getElementById("carMake").value;
    const carModel = document.getElementById("carModel").value;
    const carModelYear = document.getElementById("carModelYear").value;
    const partName = document.getElementById("partName").value;
    const partImage = document.getElementById("partImage").files[0];
    const phoneNumber = document.getElementById("phoneNumber").value;

    const whatsappNumber = "8700459484"; // Your WhatsApp number

    let message = `Hello, I need the following spare part:
Car Make: ${carMake}
Car Model: ${carModel}
Car Model Year: ${carModelYear}
Part Name: ${partName}
Phone Number: ${phoneNumber}`;

    if (partImage) {
        message += "\nImage uploaded (image URLs need server support).";
    }

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp and show popup after a delay
    window.location.href = whatsappLink;

    setTimeout(() => {
        document.getElementById("confirmationPopup").style.display = "flex";
    }, 2000); // Show popup after 2 seconds to allow redirect
});

function closePopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}


// Let me know if you want me to add proper image hosting or tweak the popup timing! 🚀
