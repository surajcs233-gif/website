document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll('.page');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const backBtns = document.querySelectorAll('.backBtn');
    const yearEl = document.getElementById('year');
    const postList = document.getElementById('postList');
    const articleContent = document.getElementById('articleContent');

    const articles = [
        {
            title: "The Art of Simplicity",
            subtitle: "Why less really is more.",
            content: "<p>Simplicity is the ultimate sophistication...</p>"
        },
        {
            title: "Focus in a Distracted World",
            subtitle: "Learning to stay present in chaos.",
            content: "<p>In a world filled with noise, true focus is rare...</p>"
        },
        {
            title: "Designing Without Color",
            subtitle: "The elegance of grayscale aesthetics.",
            content: "<p>Sometimes grayscale can speak louder than colors...</p>"
        }
    ];

    // Set the current year in the footer
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Function to show the correct page and hide the others
    function showPage(id) {
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(id).classList.remove('hidden');
    }

    // Generate post list dynamically
    function renderPosts() {
        articles.forEach((article, index) => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${article.title}</h2>
                <p class="subtitle">${article.subtitle}</p>
            `;
            postElement.addEventListener('click', () => openArticle(index));
            postList.appendChild(postElement);
        });
    }

    // Function to display article content on the article page
    function openArticle(id) {
        const article = articles[id];
        articleContent.innerHTML = `
            <h2>${article.title}</h2>
            ${article.content}
        `;
        showPage('articlePage');
    }

    // Add event listeners for navigation
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('homePage');
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('aboutPage');
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showPage('homePage');
        });
    });

    // Initial page load
    renderPosts();
    showPage('homePage');
});
