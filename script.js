// Function called by Explore button or direct interaction
function showMessage() {
    alert("Welcome to Travel India!\n\nExplore our handpicked destinations:\n• Kerala - Peaceful backwaters & nature\n• Goa - Scenic beaches & vibrant culture\n\nClick on any destination card to view more details!");
}

// Show destination details on card click
function showDestinationDetails(placeName) {
    const destinationInfo = {
        "Kerala": "Kerala - God's Own Country\n\nHighlights: Backwater houseboat cruises, tea plantations in Munnar, and Ayurvedic wellness.\nBest Time to Visit: September to March.",
        "Goa": "Goa - Pearl of the Orient\n\nHighlights: Pristine sandy beaches, Portuguese architecture, water sports, and coastal cuisine.\nBest Time to Visit: November to February."
    };

    const details = destinationInfo[placeName] || "Discover the incredible beauty and heritage of India!";
    alert(details);
}

// Attach event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // 1. Hook up the 'Explore Now' button
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", showMessage);
    }

    // 2. Make all destination cards interactive
    const cards = document.querySelectorAll(".destination-card");
    cards.forEach(function (card) {
        card.style.cursor = "pointer";
        card.title = "Click to view destination details";

        card.addEventListener("click", function () {
            const heading = card.querySelector("h3");
            if (heading) {
                showDestinationDetails(heading.textContent.trim());
            }
        });
    });
});
