import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'CodeSnippet',
  favicon: 'https://c.codingcat.top/static/imgs/cat1.png',
  logo: 'https://c.codingcat.top/static/imgs/cat1.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  // more config: https://d.umijs.org/config
  publicPath: process.env.NODE_ENV === 'production' ? '/CodeSnippet/' : '/',
  base: '/CodeSnippet',
  exportStatic: {},
});
