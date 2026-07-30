document.addEventListener("DOMContentLoaded", () => {
    const recommendationForm = document.getElementById("recommendation-form");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-popup");
    const recommendationList = document.getElementById("recommendation-list");

    // Show popup overlay
    function showPopup() {
        popup.classList.remove("hidden");
    }

    // Hide popup overlay
    function hidePopup() {
        popup.classList.add("hidden");
    }

    // Trigger showPopup ONLY when a new recommendation is submitted
    recommendationForm.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const message = document.getElementById("rec-message").value;

        // Dynamically create and append the new recommendation based on image_100292.jpg style
        const newCard = document.createElement("div");
        newCard.classList.add("rec-card");
        newCard.innerHTML = `<p>"${message}"</p>`;
        
        recommendationList.appendChild(newCard);
        recommendationForm.reset();

        // Trigger the popup
        showPopup();
    });

    closePopupBtn.addEventListener("click", hidePopup);
});