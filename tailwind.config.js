/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  darkMode: 'class', // Enables dark mode support

  theme: {
    extend: {
      colors: {
        lightMode: {
          primaryBackground: '#F9F9F9', // Off White
          secondaryBackground: '#E0E0E0', // Light Gray
          surfaceBackground: '#FFFFFF', // White
          mainText: '#333333', // Charcoal
          secondaryText: '#666666', // Dim Gray
          inactiveText: '#A5A5A5', // Medium Gray
          primaryAccent: '#FF8C00', // Deep Orange
          secondaryAccent: '#FF5722', // Bright Red-Orange
          highlightAccent: '#FFD700', // Gold
          primaryBorder: '#CCCCCC', // Gray
          secondaryBorder: '#B3B3B3', // Light Slate Gray
          primaryButtonBackground: '#FF8C00', // Deep Orange
          buttonText: '#FFFFFF', // White
          secondaryButtonBackground: '#FF5722', // Bright Red-Orange
          hoverBackground: '#FFD700', // Gold
        },
        darkMode: {
          primaryBackground: '#1E1E1E', // Dark Charcoal
          secondaryBackground: '#2B2B2B', // Almost Black
          surfaceBackground: '#333333', // Charcoal
          mainText: '#E0E0E0', // Light Gray
          secondaryText: '#A5A5A5', // Medium Gray
          inactiveText: '#666666', // Dim Gray
          primaryAccent: '#FF8C00', // Deep Orange
          secondaryAccent: '#FF5722', // Bright Red-Orange
          highlightAccent: '#FFD700', // Gold
          primaryBorder: '#3C3C3C', // Dark Gray
          secondaryBorder: '#4D4D4D', // Slate Gray
          primaryButtonBackground: '#FF8C00', // Deep Orange
          buttonText: '#1E1E1E', // Dark Charcoal
          secondaryButtonBackground: '#FF5722', // Bright Red-Orange
          hoverBackground: '#FFD700', // Gold
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};