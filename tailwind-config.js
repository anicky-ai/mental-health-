/*
 * FILE: tailwind-config.js
 * DESKRIPSI: Konfigurasi Tailwind CSS (Custom Theme & Animations)
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                pastel: {
                    blue: '#A7C7E7', pink: '#FFD1DC', green: '#B5EAD7',
                    yellow: '#FFDAC1', purple: '#CBAACB', teal: '#6B9080', 
                    lightTeal: '#A4C3B2', bg: '#FDFBF7', text: '#27374D', card: '#FFFFFF'
                }
            },
            fontFamily: { sans: ['Quicksand', 'sans-serif'] },
            animation: {
                'blob': 'blob 7s infinite',
                'breathe': 'breathe 8s infinite ease-in-out',
                'slide-in': 'slideIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
                'slide-out': 'slideOut 0.4s ease-in forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                breathe: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
                    '50%': { transform: 'scale(1.5)', opacity: '0.3' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideOut: {
                    '0%': { transform: 'translateX(0)', opacity: '1' },
                    '100%': { transform: 'translateX(-40px)', opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}