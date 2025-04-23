module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],   // Headings
        bold: ['Montserrat', 'sans-serif'],      // Bold text/CTAs (weight 700)
      },
      colors: {
        'unix-primary': '#3B82F6',
        'unix-secondary': '#10B981',
        'unix-dark': '#1F2937',
        'unix-light': '#F9FAFB',
        'unix-neutral': '#061646',
        'unix-accent': '#AB2D2D',
      },
      fontWeight: {
        normal: '400',    // Open Sans regular
        medium: '500',    // Open Sans medium
        semibold: '600',  // Poppins semibold (headings)
        bold: '700',      // Poppins bold (CTAs)
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
}