/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554'
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'bounce-in': 'bounceIn 0.6s ease-out',
				float: 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spin-slow': 'spin 3s linear infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				gradient: 'gradient 15s ease infinite',
				shimmer: 'shimmer 2s linear infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				bounceIn: {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				gradient: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
				'gradient-sunset': 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
				'gradient-ocean': 'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
				'gradient-fire': 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
				'gradient-forest': 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)'
			},
			backdropBlur: {
				xs: '2px'
			},
			boxShadow: {
				glow: '0 0 20px rgba(59, 130, 246, 0.5)',
				'glow-lg': '0 0 40px rgba(59, 130, 246, 0.3)',
				'glow-xl': '0 0 60px rgba(59, 130, 246, 0.2)',
				'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.2)'
			},
			fontFamily: {
				sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
