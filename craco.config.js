// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/components/pages/'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@img': path.resolve(__dirname, 'src/img/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
    },
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/main.scss',
      },
    },
  ],
};
