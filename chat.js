/*
 * FILE: chat.js
 * DESKRIPSI: Logika Teman Bicara (Simulasi Anonim)
 */

const ChatModule = {
    sendMessage: function() {
        const input = document.getElementById('chat-input'); 
        const text = input.value.trim(); 
        if(!text) return;
        
        this.appendMessage('user', text); 
        input.value = ''; 
        this.scrollToBottom(); 
        
        // Simulasi reply
        setTimeout(() => { 
            this.appendMessage('bot', this.getBotResponse(text)); 
            this.scrollToBottom(); 
        }, 1200 + Math.random() * 1000);
    },

    appendMessage: function(sender, text) {
        const c = document.getElementById('chat-messages'); 
        const d = document.createElement('div');
        
        if (sender === 'user') { 
            d.className = 'flex gap-3 justify-end animate-fade-in items-end mt-4'; 
            d.innerHTML = `<div class="bg-pastel-teal p-4 rounded-2xl rounded-br-sm shadow-sm text-sm text-white max-w-[80%] leading-relaxed">${text}</div>`; 
        } else { 
            d.className = 'flex gap-3 justify-start animate-fade-in items-end mt-4'; 
            d.innerHTML = `
                <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm shrink-0 mb-1"><i class="fa-solid fa-user"></i></div>
                <div class="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm text-sm text-gray-700 max-w-[80%] border border-gray-100 leading-relaxed">${text}</div>`; 
        }
        c.appendChild(d);
    },

    scrollToBottom: function() { 
        const c = document.getElementById('chat-messages'); 
        c.scrollTop = c.scrollHeight; 
    },

    getBotResponse: function(t) {
        const l = t.toLowerCase();
        if(/\b(halo|hai|hi)\b/i.test(l)) return "Hai, salam kenal! Boleh banget, silakan cerita.";
        if(/\b(capek|lelah|stres)\b/i.test(l)) return "Wajar kok kalau merasa capek. Mau cerita lebih detail?";
        return "Pelan-pelan aja ceritanya, aku dengerin kok.";
    }
};

window.ChatModule = ChatModule;