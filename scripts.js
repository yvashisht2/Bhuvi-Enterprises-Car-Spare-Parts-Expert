document.addEventListener("DOMContentLoaded", function() {
    // Dynamically populate Car Model Year dropdown
    const carModelYearSelect = document.getElementById("carModelYear");
    const currentYear = new Date().getFullYear();
    const startYear = 2008;

    // Create options for the Car Model Year (2008 to current year)
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

    // URL for WhatsApp integration
    const whatsappNumber = ""; // Replace with your WhatsApp number
    let message = `Hello, I need the following spare part:\nCar Make: ${carMake}\nCar Model: ${carModel}\nCar Model Year: ${carModelYear}\nPart Name: ${partName}`;

    // Check if the image file is selected and add its link if needed
    let imageURL = "";
    if (partImage) {
        // You would need to upload the image to a server to get a URL, here's a placeholder:
        imageURL = "https://example.com/uploads/" + partImage.name;
        message += `\nImage URL: ${imageURL}`;
    }

    // WhatsApp message link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappLink;

    // Show confirmation popup
    document.getElementById("confirmationPopup").style.display = "flex";
});

// Close the popup
function closePopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}
