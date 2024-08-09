document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    function handleNavClick(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        showSection(sectionId);

        links.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    showSection('home');
});
