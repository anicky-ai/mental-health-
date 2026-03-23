/*
 * FILE: meditasi.js
 * DESKRIPSI: Player Audio & Animasi Bernapas
 */

const MeditasiModule = {
    intervalId: null,
    currentAudio: null,
    currentPlayBtn: null,

    init: function() {
        const breatheText = document.getElementById('breathe-text');
        if (!breatheText) return;
        
        if(this.intervalId) clearInterval(this.intervalId);

        const runBreatheCycle = () => {
            breatheText.innerText = 'Tarik...';
            breatheText.classList.replace('text-teal-600', 'text-pastel-green');
            
            setTimeout(() => {
                breatheText.innerText = 'Tahan...';
                setTimeout(() => {
                    breatheText.innerText = 'Hembuskan...';
                    breatheText.classList.replace('text-pastel-green', 'text-teal-600');
                }, 1000); 
            }, 3000); 
        };

        runBreatheCycle();
        this.intervalId = setInterval(runBreatheCycle, 8000); 
    },

    toggleAudio: function(id, btn) {
        const aud = document.getElementById(id); 
        const ico = btn.querySelector('i');
        
        aud.volume = 0.5;

        if (this.currentAudio === aud) {
            if(aud.paused) { 
                aud.play().then(() => {
                    ico.classList.replace('fa-circle-play','fa-circle-pause');
                    btn.parentElement.classList.add('border-pastel-teal', 'bg-teal-50');
                }); 
            } else { 
                aud.pause(); 
                ico.classList.replace('fa-circle-pause','fa-circle-play');
                btn.parentElement.classList.remove('border-pastel-teal', 'bg-teal-50');
            } 
            return;
        }
        
        if (this.currentAudio) { 
            this.currentAudio.pause(); 
            if(this.currentPlayBtn) {
                this.currentPlayBtn.querySelector('i').classList.replace('fa-circle-pause','fa-circle-play'); 
                this.currentPlayBtn.parentElement.classList.remove('border-pastel-teal', 'bg-teal-50');
            }
        }
        
        aud.play().then(() => { 
            ico.classList.replace('fa-circle-play','fa-circle-pause'); 
            btn.parentElement.classList.add('border-pastel-teal', 'bg-teal-50');
            this.currentAudio = aud; 
            this.currentPlayBtn = btn; 
        }); 
    }
};

window.MeditasiModule = MeditasiModule;