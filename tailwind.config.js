/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // اگر از App Router استفاده می‌کنید
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // اگر از Pages Router استفاده می‌کنید
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // اگر پوشه src دارید
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}