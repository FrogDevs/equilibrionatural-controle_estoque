/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      category1: "url('/category1.avif')",
      category2: "url('/category2.avif')",
      category3: "url('/category3.avif')",
      category4: "url('/category4.avif')",
      category5: "url('/category5.avif')",
      store1hd: "url('/store1hd.avif')"
    }
  },
  plugins: []
}
