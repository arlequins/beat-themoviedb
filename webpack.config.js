const webpack = require('webpack')
const path = require('path')

// S: REQUIRED PLUGINS
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// E: REQUIRED PLUGINS

// S: constants
const VERSION = require('./package.json').version
const EXECUTE_ENV_ARGV = process.argv ? process.argv.find(str => str.startsWith('--env=')) : ''
const EXECUTE_ENV = EXECUTE_ENV_ARGV.length > 0 ? EXECUTE_ENV_ARGV.replace('--env=', '') : 'development'
const IS_DEVELOPMENT = EXECUTE_ENV === 'development'
const EXECUTE_MODE = EXECUTE_ENV === 'production' ? 'production' : 'development'
// E: constants

// S: plugins
const Environment = require('./environment.json')
const CUSTOM_NODE_ENV = {
  ...Environment[EXECUTE_ENV],
  VERSION: VERSION,
  NODE_ENV: EXECUTE_ENV,
}

const PLUGINS_LIST = [
  new WebpackManifestPlugin({
    fileName: path.join(__dirname, 'server', 'dist', 'flagship', 'assets.json'),
    basePath: ''
  }),
  new HtmlWebPackPlugin({
    title: 'title',
    template: path.join(__dirname, 'src', 'assets', 'html', 'index.html'),
    filename: path.join('index.html'),
  }),
  new webpack.EnvironmentPlugin({
    ...CUSTOM_NODE_ENV,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.join(__dirname, 'src', 'assets', 'images'),
        to: path.join(__dirname, 'server', 'dist', 'assets', VERSION, 'images'),
      },
      {
        from: path.join(__dirname, 'src', 'assets', 'static'),
        to: path.join(__dirname, 'server', 'dist', 'static'),
      },
      {
        from: path.join(__dirname, 'src', 'assets', 'root'),
        to: path.join(__dirname, 'server', 'dist', 'flagship'),
      },
    ],
  }),
]

const ALL_PLUGINS_LIST = IS_DEVELOPMENT ? [
  ...PLUGINS_LIST,
] : [
  new MiniCssExtractPlugin({
    filename: `assets/${VERSION}/beat/css/[name].[contenthash].css`,
    chunkFilename: `assets/${VERSION}/beat/css/chunk-[name].[contenthash].css`,
  }),
  new CleanWebpackPlugin({
    allowExternal: false,
    exclude:  [],
    verbose:  false,
    dry:      false,
  }),
  ...PLUGINS_LIST,
].filter(Boolean)
// E: plugins

module.exports = {
  mode: EXECUTE_MODE,
  entry: {
    'app': IS_DEVELOPMENT ? path.join(__dirname, 'src', 'client', 'index.development') : path.join(__dirname, 'src', 'client', 'index.production'),
  },
  output: {
    path: path.join(__dirname, '.', 'server', 'dist'),
    filename: IS_DEVELOPMENT ? `assets/${VERSION}/beat/js/[name].[fullhash].js` : `assets/${VERSION}/beat/js/[name].[contenthash].js`,
    chunkFilename: IS_DEVELOPMENT ? `assets/${VERSION}/beat/js/chunk-[name].[fullhash].js` : `assets/${VERSION}/beat/js/chunk-[name].[contenthash].js`,
    publicPath: IS_DEVELOPMENT ? `http://localhost:5000/` : `/`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      client: path.resolve(__dirname, 'src/client/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      types: path.resolve(__dirname, 'types/'),
      scss: path.resolve(__dirname, 'src/assets/scss/'),
    },
    fallback: {
      fs: false,
      crypto: false,
      net: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        include: [ /src\/js/, /node_modules\/axios/ ],
        exclude: /node_modules/,
        use: [
          !IS_DEVELOPMENT && {
            loader: 'babel-loader',
          },
        ].filter(Boolean)
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              configFile: 'tsconfig.json',
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false,
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              tsConfigFile: 'tsconfig.json'
            },
          }
        ],
      },
    ]
  },
  plugins: ALL_PLUGINS_LIST,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          ecma: 5,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      maxSize: 300000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: false, // if true auto splits
      cacheGroups: {
        vendor: {
          test: path.resolve(process.cwd(), 'node_modules'),
          name: 'vendor',
          // chunks: 'initial',
          priority: -10,
          // enforce: true,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    },
    runtimeChunk: false,
  },
  devServer: {
    compress: true,
    contentBase: [
      path.join(__dirname, 'src', 'assets'),
    ],
    watchContentBase: true,
    hot: true,
    inline: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
      ]
    },
    stats: 'minimal',
    // openPage: ``,
    publicPath: `/`,
    port: '5000',
  },
  performance: {
    maxEntrypointSize: 128000,
    maxAssetSize: 128000,
    hints: false
  }
}
