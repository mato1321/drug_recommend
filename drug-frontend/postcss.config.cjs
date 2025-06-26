// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ 使用新的獨立套件
    autoprefixer: {},
  }
}