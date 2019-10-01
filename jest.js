/**
 *  Allows linting and fixing Jest test scripts
 */
module.exports = {
  plugins: ['jest'],
  extends: ['./index.js', 'plugin:jest/recommended'],
}
