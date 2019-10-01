/**
 *  Allows linting and fixing inline scripts contained in HTML files
 */
module.exports = {
  plugins: ['html'],
  extends: ['./index.js'],
  settings: {
    /*
     * Override the default extensions for the HTML plugin so that it
     * doesn't try to handle Vue files – this is handled by the Vue plugin.
     */
    'html/html-extensions': ['.html'],
  },
}
