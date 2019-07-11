module.exports = {
  content: [
    './dist/**/*.html',
    './dist/assets/js/*.js'
  ],
  css: [
    './dist/assets/css/*.css'
  ],
  whitelistPatternsChildren: [
    /^spinner-border.*/
  ],
  rejected: true
}
