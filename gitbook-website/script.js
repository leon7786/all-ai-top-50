import { bookData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('sidebar-nav');
    const contentTitle = document.getElementById('content-title');
    const mainContent = document.getElementById('main-content');

    let currentActiveId = null;

    function renderContent(id) {
        const section = bookData.find(s => s.id === id) || bookData[0];
        
        // Update Title
        contentTitle.textContent = section.title;
        
        // Update Content
        mainContent.innerHTML = section.content;

        // Update Nav Styles
        document.querySelectorAll('.nav-item').forEach(el => {
            if (el.dataset.id === section.id) {
                el.classList.add('bg-muted', 'font-medium', 'text-foreground');
                el.classList.remove('text-muted-foreground');
            } else {
                el.classList.remove('bg-muted', 'font-medium', 'text-foreground');
                el.classList.add('text-muted-foreground');
            }
        });

        currentActiveId = section.id;
    }

    // Build Nav
    bookData.forEach(section => {
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.className = "nav-item block px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted/50 cursor-pointer";
        a.dataset.id = section.id;
        a.textContent = section.title;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            history.pushState(null, '', `#${section.id}`);
            renderContent(section.id);
        });

        navContainer.appendChild(a);
    });

    // Handle initial load
    const hash = window.location.hash.slice(1);
    const initialId = bookData.find(s => s.id === hash) ? hash : bookData[0].id;
    renderContent(initialId);

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash && hash !== currentActiveId) {
            renderContent(hash);
        }
    });
});
