const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('year');
const postsContainer = document.getElementById('postsContainer'); // Assuming this exists in your HTML

const articles = [
    {
        title: "The Art of Simplicity",
        content: "<p>Simplicity is the ultimate sophistication...</p>"
    },
    {
        title: "Focus in a Distracted World",
        content: "<p>In a world filled with noise, true focus is rare...</p>"
    },
    {
        title: "Designing Without Color",
        content: "<p>Sometimes grayscale can speak louder than colors...</p>"
    }
];

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
    pages.forEach(page => {
        page.style.visibility = 'hidden';
    });
    document.getElementById(id).style.visibility = 'visible';
}

homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
backBtn.onclick = () => showPage('homePage');

function openArticle(id) {
    const article = articles[id]; 
    const content = document.getElementById('articleContent');
    content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
    showPage('articlePage');
}

    articles.forEach((article, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.textContent = article.title;
        postElement.onclick = () => openArticle(index);
        postsContainer.appendChild(postElement);
    });
}