/*
 * FILE: ui.js
 * DESKRIPSI: Interaktivitas UI Global (Mobile Menu, Modal, Quote Rotator)
 */

const UI = {
    toggleMobileMenu: function() {
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-overlay');
        menu.classList.toggle('translate-x-full');
        overlay.classList.toggle('opacity-0'); 
        overlay.classList.toggle('pointer-events-none');
    },

    navigateMobile: function(pageId) {
        window.navigate(pageId);
        this.toggleMobileMenu();
    },

    toggleMobileSubmenu: function() {
        const submenu = document.getElementById('mobile-submenu');
        const icon = document.getElementById('mobile-submenu-icon');
        if(submenu.classList.contains('hidden')) { 
            submenu.classList.remove('hidden'); 
            submenu.classList.add('flex'); 
            icon.style.transform = 'rotate(180deg)'; 
        } else { 
            submenu.classList.add('hidden'); 
            submenu.classList.remove('flex'); 
            icon.style.transform = 'rotate(0deg)'; 
        }
    },

    toggleEmergencyModal: function() {
        const modal = document.getElementById('emergency-modal');
        modal.classList.toggle('opacity-0'); 
        modal.classList.toggle('pointer-events-none'); 
        modal.classList.toggle('scale-95');
    },

    initDailyQuote: function() {
        const quotes = [
            "Tidak apa-apa untuk beristirahat saat kamu merasa lelah.",
            "Perasaanmu valid, sekecil apapun itu.",
            "Kemajuan sekecil apapun tetaplah sebuah kemajuan.",
            "Kamu sudah bertahan sejauh ini, kamu hebat."
        ];
        let quoteIndex = 0;
        setInterval(() => {
            const quoteEl = document.getElementById('daily-quote');
            if(quoteEl) {
                quoteEl.style.opacity = 0;
                setTimeout(() => { 
                    quoteIndex = (quoteIndex + 1) % quotes.length; 
                    quoteEl.innerText = `"${quotes[quoteIndex]}"`; 
                    quoteEl.style.opacity = 1; 
                }, 500);
            }
        }, 5000);
    }
};

window.UI = UI; // Expose ke window untuk dipanggil dari HTML