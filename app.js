/*
 * FILE: app.js
 * DESKRIPSI: Entry point utama untuk inisialisasi aplikasi
 */

document.addEventListener('DOMContentLoaded', () => {
    // Jalankan page default
    navigate('home');
    
    // Inisialisasi Quote Harian
    UI.initDailyQuote();
    
    // Inisialisasi event listener Enter pada input chat
    const chatInput = document.getElementById('chat-input'); 
    if(chatInput) {
        chatInput.addEventListener('keypress', (e) => { 
            if(e.key === 'Enter') ChatModule.sendMessage(); 
        });
    }
});