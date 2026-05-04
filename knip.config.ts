import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: ['src/libs/I18n.ts', 'src/types/I18n.ts', 'tests/**/*.ts'],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@chromatic-com/playwright',
    '@commitlint/types',
    '@swc/helpers', // Avoid error in CI: "`npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync."
    'postcss',
    'vite',
  ],
  // Binaries to ignore during analysis
  ignoreBinaries: [],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
