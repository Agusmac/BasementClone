/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "html.has-scroll-smooth",
    "html.has-scroll-dragging",
    `[data-scroll-direction="horizontal"]`,
    ".c-scrollbar",
    ".c-scrollbar_thumb",
    '.is-inview'
  ],
}