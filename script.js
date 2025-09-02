// Data that will be used to generate cards
const Title = "Elzero";
const Description = "Elzero Web School";
const date = "25/10";

// Reusable function that returns markup for one card
function createCard({ title, description, date }) {
    return `
    <div class="card" dir="rtl">
        <div class="child">
            <h2>${title}</h2>
            <p>${description}</p>
            <span>${date}</span>
        </div>
    </div>
    `;
}

// Option A: create an array of 4 identical items (you can vary them)
const items = Array.from({ length: 4 }, () => ({ title: Title, description: Description, date }));

// Option B (alternative): generate N copies using a count
// const count = 4;
// const items = new Array(count).fill({ title: Title, description: Description, date });

// Insert generated markup into the page safely
document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'cards-container';
    container.innerHTML = items.map(createCard).join('');
    document.body.prepend(container);
});