/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 自定義顏色 - 適合醫療網站
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        medical: {
          blue: '#1e40af',
          green: '#059669',
          red: '#dc2626',
        }
      },
      fontFamily: {
        // 可以添加自定義字體
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        // 自定義間距
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}