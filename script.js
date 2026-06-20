document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'th'; // Default language

    langToggleBtn.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'th' ? 'en' : 'th';
        
        // Update button text
        langToggleBtn.innerText = currentLang === 'th' ? 'EN' : 'TH';

        // Update all elements with data-th and data-en attributes
        document.querySelectorAll('[data-th]').forEach(el => {
            el.innerText = el.getAttribute(`data-${currentLang}`);
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-modal");
    const menuImages = document.querySelectorAll(".menu-image");

    menuImages.forEach(img => {
        const container = img.closest('.menu-image-container');
        
        container.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            const title = container.nextElementSibling.querySelector('h3').innerText;
            captionText.innerText = title;
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === captionText) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
