document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Feather icons
    feather.replace();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.3)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
    });

    // Add a simple animation to the hero section
    const heroSection = document.getElementById('hero');
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
        heroSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 100);
});
