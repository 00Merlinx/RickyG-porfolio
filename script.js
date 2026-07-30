// Function to add a new recommendation
function addRecommendation() {
    // 1. Get the values from the input fields
    const messageInput = document.getElementById("rec-message");
    const nameInput = document.getElementById("rec-name");
    const recommendationList = document.getElementById("recommendation-list");

    const message = messageInput.value.trim();

    // 2. Validate that the message is not empty
    if (message !== "") {
        // 3. Create a new recommendation card mimicking the design
        const newCard = document.createElement("div");
        newCard.classList.add("rec-card");
        
        // Add the message text to the card
        newCard.innerHTML = `<p>"${message}"</p>`;
        
        // 4. Append the new card to the recommendations grid
        recommendationList.appendChild(newCard);

        // 5. Clear the input fields after submission
        messageInput.value = "";
        nameInput.value = "";

        // 6. Trigger the popup notification ONLY when a new recommendation is successfully submitted
        showPopup();
    } else {
        alert("Please enter a message before submitting.");
    }
}

// Function to show the popup
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}

// Attach event listener for the close button once the DOM fully loads
document.addEventListener("DOMContentLoaded", () => {
    const closePopupBtn = document.getElementById("close-popup");
    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", hidePopup);
    }
});
