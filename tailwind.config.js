const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

const plugin = require('tailwindcss/plugin');
const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      xxs: ['0.65rem', { lineHeight: '.85rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors:{
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
        base:{
          pink: 'var(--color-text-pink)',
          green: 'var(--color-text-green)',
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      textColor:{
        color:{
          black: 'var(--color-text-black)',
          'black-light': 'var(--color-text-black-light)',
          light: 'var(--color-text-light)',
          pink: 'var(--color-text-pink)',
          green: 'var(--color-text-green)',          
          gray: 'var(--color-text-gray)',
          'gray-light': 'var(--color-text-gray-light)',
          'green-light': 'var(--color-text-green-light)',
          'green-yellow': 'var(--color-text-green-yellow)',
          'green': 'var(--color-text-green)',
          'green-dark': 'var(--color-text-green-dark)',
          
        },
      },
      backgroundColor:{
        base:{
          light:'var(--color-base-light)',
          'pink-hover':'var(--color-btn-pink-hover)',
          'green-hover':'var(--color-btn-green-hover)',
          'green-light':'var(--color-base-green-light)',
          'green':'var(--color-base-green)',
          'gray-light':'var(--color-base-gray-light)',
          'green-deep':'var(--color-base-green-deep)',
          'green-light': 'var(--color-base-green-light)',
          'green-yellow': 'var(--color-base-green-yellow)',
          'green': 'var(--color-base-green)',
          'green-dark': 'var(--color-base-green-dark)',
        },
        butn:{
          'light':'var(--color-btn-light)',
          'light-hover':'var(--color-btn-light-hover)',
          'pink':'var(--color-btn-pink)',
          'green':'var(--color-btn-green)',
          'pink-hover':'var(--color-btn-pink-hover)',
          'green-hover':'var(--color-btn-green-hover)',
          'green-active':'var(--color-btn-green-active)',
          gray: 'var(--color-btn-gray)',
          'gray-light': 'var(--color-btn-gray-light)',
          'transparent':'var(--color-btn-transparent)',
          'transparent-hover':'var(--color-btn-transparent-hover)',
        },
        transparent:{
          light: 'var(--color-light-transparent)',
        }
      },
      ringColor:{
        base:{
          pink: 'var(--color-text-pink)',
          green: 'var(--color-text-green)',
          
        },
      },
      boxShadow: {
        base: {
          xl: ['0 0 0 3px rgba(66, 153, 225, 0.5), 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05)'],
          pink: ['var(--color-shadow-pink)'],
          green: ['var(--color-shadow-green)'],
          gray: ['0 0 5px 5px rgb(0,0,0)', '10px', '#d4e', '5px'],
        },
        gray: 'var(--color-shadow-gray)',
      },
      
      fontFamily: {
        'rale': ["Raleway", ...defaultTheme.fontFamily.sans],
        'title':["Raleway",...defaultTheme.fontFamily.sans],
        para: ['Poppins',...defaultTheme.fontFamily.sans],
        light: ['var(--font-family-para)', 'sans-serif', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-family-secondary)', 'sans-serif', ...defaultTheme.fontFamily.sans],
        small: ['var(--font-family-small)', 'sans-serif', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        mont: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      
      borderColor:{
        base:{
          'green-deep': 'var(--color-base-green-deep)',
          'gray-light': 'var(--color-text-gray-light)',
          pink: 'var(--color-shadow-base)',
          green: 'var(--color-shadow-base)',
        }
      },
      outlineColor:{
        base:{
          pink: 'var(--color-shadow-base)',
          green: 'var(--color-shadow-base)',
        },
      }
    },
    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
    },
  },
  plugins: [
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
],
}
