import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/index.js',
  output: {
    name: 'preventWxOverscroll',
    file: './dist/preventWxOverScroll.js',
    format: 'umd'
  },
  plugins: [
    minify()
  ]
};