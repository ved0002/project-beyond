document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const track = document.getElementById('track').value;
        const experience = document.getElementById('experience').value;

        if (name && email && track) {
            // Hide the form and show inline success feedback
            form.style.display = 'none';
            
            confirmationMessage.innerHTML = `
                <strong>Registration Complete!</strong><br>
                Thank you, ${name}. We've reserved your spot for the <strong>${track}</strong> track (${experience} level). A confirmation email has been dispatched to <em>${email}</em>.
            `;
            confirmationMessage.style.display = 'block';
        }
    });

    // Smooth scrolling implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

