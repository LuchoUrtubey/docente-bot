/**
 * Configuración de Tailwind CSS Play CDN
 * Define los colores institucionales de marca, tipografía y soporte para modo oscuro.
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        telegram: '#229ED9',
        sheets: '#0F9D58',
      }
    }
  }
};
