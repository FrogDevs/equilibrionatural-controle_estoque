/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#954906',
        onPrimary: '#ffffff',
        primaryContainer: '#ffdbc7',
        onPrimaryContainer: '#311300',
        secondary: '#755846',
        onSecondary: '#ffffff',
        secondaryContainer: '#ffdbc7',
        onSecondaryContainer: '#2b1709',
        tertiary: '#4f6603',
        onTertiary: '#ffffff',
        tertiaryContainer: '#d0ee82',
        onTertiaryContainer: '#151f00',
        error: '#ba1a1a',
        onError: '#ffffff',
        errorContainer: '#ffdad6',
        onErrorContainer: '#410002',
        background: '#fffbff',
        onBackground: '#201a17',
        surface: '#fffbff',
        onSurface: '#201a17',
        inverseOnSurface: '#FBEEE8',
        outline: '#84746a',
        surfaceVariant: '#f4ded3',
        onSurfaceVariant: '#52443c',
        scrim: '#000000'
      }
    },
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
