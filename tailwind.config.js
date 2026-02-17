tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#009b9f', // Teal
        accent: '#f39800',  // Orange
        secondary: '#58b2dc', // Light Blue
        text: '#333333',
        'line-green': '#06C755',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/mv_bg.png')", // Placeholder if needed
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px', // Matches typical LP width
      },
    },
  }
}
