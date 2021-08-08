/**
 * @description webpack5
 * @author xuzhanbo
 * @time 2021-7-31
 * **/

module.exports = {
  presets: [
    
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        development: process.env.NODE_ENV === "development",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-syntax-dynamic-import",
  ]
}

