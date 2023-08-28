const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                pine: '#3b732d',
                mustard: '#f9bc40',
                sand: '#fbd17d',
                mint: '#7fb099',
                moss: '#3d8865',
                pond: '#003f5c',
            },
            fontFamily: {
                roboto: [
                  'Roboto',
                  'sans-serif',
                  'Montserrat'
                ],
                plex: [
                  '"IBM Plex Sans"',
                ],
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
