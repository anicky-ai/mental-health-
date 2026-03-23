/*
 * FILE: konsultasi.js
 * DESKRIPSI: Filter list psikolog
 */

const KonsultasiModule = {
    filterPsikolog: function(category, btn) {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(b => {
            b.classList.remove('bg-gray-900', 'text-white', 'shadow-md', 'border-gray-900');
            b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
        });
        
        btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
        btn.classList.add('bg-gray-900', 'text-white', 'shadow-md', 'border-gray-900');

        const cards = document.querySelectorAll('.psikolog-card');
        cards.forEach(card => {
            card.classList.remove('animate-fade-in');
            
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                void card.offsetWidth; // trigger reflow
                card.classList.add('animate-fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
};

window.KonsultasiModule = KonsultasiModule;