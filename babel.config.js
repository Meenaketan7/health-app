module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/components/core': './src/components/core',
          '~/components/containers': './src/components/containers',
          '~/components/shared': './src/components/shared',
          '~/configs': './src/configs',
          '~/constant': './src/constant',
          '~/hooks': './src/hooks',
          '~/routes': './src/routes',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/types': './src/types',
          '~/utils': './src/utils',
        },
      },
    ],
  ],
};
