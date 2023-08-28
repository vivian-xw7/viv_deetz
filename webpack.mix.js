const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.postCss('resources/css/main.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
]);
