const searchInput = document.getElementById("searchbox");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    cards.forEach(card => {
        const title = card.getAttribute("data-title");
        if (title.includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

