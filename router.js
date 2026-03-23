/*
 * FILE: router.js
 * DESKRIPSI: Sistem routing sederhana untuk SPA (Single Page Application)
 */

window.navigate = function(pageId) {
    // 1. Sembunyikan semua section
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.add('hidden'); 
        sec.classList.remove('animate-fade-in');
    });

    // 2. Tampilkan target section
    const target = document.getElementById('page-' + pageId);
    if(target) { 
        target.classList.remove('hidden'); 
        void target.offsetWidth; // trigger DOM reflow
        target.classList.add('animate-fade-in'); 
    }

    // 3. Scroll ke atas
    window.scrollTo(0, 0);
    
    // 4. Inisialisasi spesifik per modul
    if(pageId === 'test' && window.QuizModule) window.QuizModule.init();
    if(pageId === 'meditasi' && window.MeditasiModule) window.MeditasiModule.init();
}