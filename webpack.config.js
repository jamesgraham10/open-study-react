module.exports = {
  entry: "./app/react/main.jsx",
  output: {
    path: __dirname + "/public/js/",
    filename: "bundle.js"
  },
  // look for these file extensions on require
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel",
        query: {
            presets: ['react', 'es2015']
          }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
