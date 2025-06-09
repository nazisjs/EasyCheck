document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchbox");
    const typeFilter = document.getElementById("typeFilter");
    const dateFilter = document.getElementById("dateFilter");
    const purposeFilter = document.getElementById("purposeFilter");
    const cards = document.querySelectorAll(".card");

    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        const type = typeFilter.value.toLowerCase();
        const date = dateFilter.value;
        const purpose = purposeFilter.value.toLowerCase();

        cards.forEach(card => {
            const cardTitle = card.dataset.title;
            const cardType = card.dataset.type;
            const cardDate = card.dataset.date;
            const cardPurpose = card.dataset.purpose;

            const matchesSearch = cardTitle.includes(searchTerm);
            const matchesType = !type || cardType === type;
            const matchesDate = !date || cardDate === date;
            const matchesPurpose = !purpose || cardPurpose === purpose;

            if (matchesSearch && matchesType && matchesDate && matchesPurpose) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterCards);
    typeFilter.addEventListener("change", filterCards);
    dateFilter.addEventListener("change", filterCards);
    purposeFilter.addEventListener("change", filterCards);
});
