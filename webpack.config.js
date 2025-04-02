const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    todo: './src/js/todo.js',
    index1: './src/js/index1.js',
    index2: './src/js/index2.js',
    index3: './src/js/index3.js',
    index4: './src/js/index4.js',
    async: './src/js/async.js',
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: "[name].bundle.js"
  },
  devServer:{
    static: {
      directory: "./dist"
    },
  },
  module: {
    rules: [
      {
        //拡張子cssファイル（正規表現）
        test: /\.css$/,
        //use配列のローダーは配列の最後尾から順に適用される。よってcss-loader → style-loaderの順となる。
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //拡張子jsファイル（正規表現）
        test: /\.js$/,
        use:[
          {
            loader: "babel-loader",//Babelを利用する
            options: { //Babelのオプションを指定する
              presets:[
                "@babel/preset-env",//プリセットを指定することで新しいESをES5に変換
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index1', 'index2', 'index3', 'index4'],
    }),
    new HtmlWebpackPlugin({
      template: './src/todo.html',
      filename: 'todo.html',
      chunks: ['todo'],
    }),
    new HtmlWebpackPlugin({
      template: './src/event.html',
      filename: 'event.html',
      chunks: ['event'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dom.html',
      filename: 'dom.html',
      chunks: ['dom'],
    }),
    new HtmlWebpackPlugin({
      template: './src/async.html',
      filename: 'async.html',
      chunks: ['async'],
    }),
    new MiniCssExtractPlugin(),
  ],
  target: ["web", "es5"], //ES5(IE11等)向けの指定
};