/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      'light': {
        'primary': '#99FFEC',
        'primary-content': '#081613',
        'secondary': '#F5F0E5',
        'secondary-content': '#151412',
        'accent': '#00B090',
        'accent-content': '#000b07',
        'neutral': '#3B424E',
        'neutral-content': '#d4d6d9',
        'base-100': '#ffffff',
        'base-200': '#dedede',
        'base-300': '#bebebe',
        'base-content': '#161616',
        'info': '#1c92f2',
        'info-content': '#000814',
        'success': '#009485',
        'success-content': '#000806',
        'warning': '#ff9900',
        'warning-content': '#160800',
        'error': '#ff5724',
        'error-content': '#160300',
      },
      'dark': {
        'primary': '#99FFEC',
        'primary-content': '#081613',
        'secondary': '#F5F0E5',
        'secondary-content': '#151412',
        'accent': '#00B090',
        'accent-content': '#000b07',
        'neutral': '#3B424E',
        'neutral-content': '#d4d6d9',
        'base-100': '#3b424e',
        'base-200': '#323843',
        'base-300': '#292f38',
        'base-content': '#d4d6d9',
        'info': '#66c7ff',
        'info-content': '#030e16',
        'success': '#87cf3a',
        'success-content': '#061001',
        'warning': '#e1d460',
        'warning-content': '#121003',
        'error': '#ff6b6b',
        'error-content': '#160404',
      },
    }],
  },
};
