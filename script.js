document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    features.forEach(feature => {
        feature.addEventListener("click", () => {
            const featureTitle = feature.querySelector("h3").innerText;
            alert(`ChatCore says:\n"${featureTitle}" is currently unavailable. We're working on it. Thank you for your patience!`);
        });
    });
});
