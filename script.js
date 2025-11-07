/*
 * Simple interactivity for the Yojo Games site.
 * Handles category filtering and mobile navigation toggling.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality for the games catalogue
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button styling
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');

            const filter = button.dataset.filter;
            gameCards.forEach(card => {
                const category = card.dataset.category;
                // Show all cards if 'all' selected or match category
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});