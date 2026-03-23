/*
 * FILE: test.js
 * DESKRIPSI: Logika Kuesioner, perhitungan skor, & Result generator
 */

const QuizModule = {
    questions: [
        { q: "Bagaimana warna langit di pikiranmu hari ini?", options: [{ text: "Cerah berawan", icon: "fa-sun text-yellow-400", type: "peaceful", story: "terasa cerah berawan" }, { text: "Gelap berbadai", icon: "fa-cloud-bolt text-gray-700", type: "anxious", story: "terasa gelap dan berbadai" }] },
        { q: "Saat ada beban berat, apa refleks utamamu?", options: [{ text: "Menyendiri", icon: "fa-door-closed text-blue-400", type: "tired", story: "kamu memilih bersembunyi" }, { text: "Mencari teman", icon: "fa-user-group text-green-400", type: "social", story: "kamu mencari sandaran" }] }
        // Dipotong untuk contoh struktur yang ringkas, sesuaikan array dengan lengkap di project aslinya.
    ],
    
    currentQuestion: 0,
    userAnswers: [],
    isAnimating: false,

    init: function() {
        this.currentQuestion = 0; 
        this.userAnswers = []; 
        this.isAnimating = false; 
        this.renderQuestion();
    },

    renderQuestion: function() {
        const container = document.getElementById('quiz-container'); 
        const q = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        
        document.getElementById('progress-bar').style.width = `${progress}%`; 
        document.getElementById('progress-text').innerText = `Pertanyaan ${this.currentQuestion + 1} / ${this.questions.length}`;
        
        let html = `
            <div class="question-card bg-white p-6 md:p-10 rounded-[2rem] shadow-lg border border-gray-50 mx-2 md:mx-0">
                <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-gray-900">${q.q}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${q.options.map((opt, idx) => `
                        <button onclick="QuizModule.answerQuestion(${idx}, this)" class="text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-pastel-teal hover:bg-teal-50 transition-all group flex items-center gap-4">
                            <div class="w-12 h-12 rounded-[1rem] bg-gray-50 flex items-center justify-center group-hover:bg-white shadow-sm shrink-0">
                                <i class="fa-solid ${opt.icon} text-xl group-hover:scale-110 transition"></i>
                            </div>
                            <span class="font-bold text-[15px] text-gray-700">${opt.text}</span>
                        </button>
                    `).join('')}
                </div>
            </div>`;
        
        const oldCard = container.querySelector('.question-card');
        if(oldCard) { 
            oldCard.classList.replace('slide-enter', 'slide-exit'); 
            const tempDiv = document.createElement('div'); tempDiv.innerHTML = html; 
            const newCard = tempDiv.firstElementChild; newCard.classList.add('slide-enter');
            container.appendChild(newCard); 
            
            setTimeout(() => { 
                if(oldCard.parentNode) oldCard.parentNode.removeChild(oldCard); 
                this.isAnimating = false; 
            }, 400); 
        } else { 
            container.innerHTML = html; 
            container.querySelector('.question-card').classList.add('slide-enter'); 
            this.isAnimating = false;
        }
    },

    answerQuestion: function(idx, btnElement) {
        if (this.isAnimating) return; 
        this.isAnimating = true;       
        
        if (btnElement) {
            btnElement.classList.add('border-pastel-teal', 'bg-teal-50', 'ring-2', 'ring-pastel-teal/30');
        }

        document.querySelectorAll('#quiz-container button').forEach(btn => btn.disabled = true); 
        this.userAnswers.push(this.questions[this.currentQuestion].options[idx]);
        
        setTimeout(() => { 
            if (this.currentQuestion < this.questions.length - 1) { 
                this.currentQuestion++; 
                this.renderQuestion(); 
            } else { 
                this.generateResult(); 
            } 
        }, 250);
    },

    generateResult: function() {
        // Logic kalkulasi disederhanakan untuk contoh. 
        // Array userAnswers di-map untuk memunculkan text rekomendasi di result tab.
        document.getElementById('mood-visual').innerText = "🔋"; 
        document.getElementById('mood-title').innerText = "Lelah Emosional";
        document.getElementById('story-content').innerText = "Hari ini, langit pikiranmu terasa mendung..."; 
        
        setTimeout(() => {
            document.getElementById('tracker-energi').style.width = '20%'; 
            document.getElementById('tracker-stres').style.width = '80%'; 
        }, 600);
        
        window.navigate('result');
    }
};

window.QuizModule = QuizModule;