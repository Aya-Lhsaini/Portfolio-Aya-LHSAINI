document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Change nav background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
function openModal(projectId) {
    // Remplir les détails du projet dans le modal
    const projects = {
        'project1': {
            title: 'Projet 1',
            image: 'project1-full.jpg',
            description: 'Description complète du projet 1.'
        },
        'project2': {
            title: 'Projet 2',
            image: 'project2-full.jpg',
            description: 'Description complète du projet 2.'
        }
        // Ajoute plus de projets ici
    };

    const project = projects[projectId];
    if (project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('project-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}