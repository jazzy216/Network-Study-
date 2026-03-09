document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Sidebar Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');

    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when a link is clicked on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // 2. Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Check for saved theme preference
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 3. Port & Protocol Search Filter
    const searchInput = document.getElementById('portSearch');
    const tableRows = document.querySelectorAll('#portsTable tbody tr');

    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();

        tableRows.forEach(row => {
            // Get text from all cells in the row
            const rowText = row.textContent.toLowerCase();
            
            // If the row contains the search term, show it. Otherwise, hide it.
            if (rowText.includes(term)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // 4. Smooth Scrolling for Sidebar Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
