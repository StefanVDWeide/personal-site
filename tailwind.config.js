import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        "dark-background": "#1C1C1C",
      },
      fontFamily: {
        custom: ['Work Sans'],
        code: ['Fira Code']
      },
      typography: {
        DEFAULT: {
          css: {
            'pre code': { 'font-family': 'Fira Code' },
            code: {
              'font-family': 'Fira Code',
            },
            "code::before": {
              content: '""',
              paddingLeft: "0.25rem",
            },
            "code::after": {
              content: '""',
              paddingRight: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    }),
  ],
};

