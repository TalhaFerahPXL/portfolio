module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if you're using Next.js 13+ App Router
  ],
  theme: {
    extend: {
      colors: {
        // Example: link custom variables to Tailwind if desired
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      // You can also map your font vars here if needed
    },
  },
  plugins: [],
};
