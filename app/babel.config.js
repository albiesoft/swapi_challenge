module.exports = {
  env: {
    production: {
      presets: ['next/babel'],
      plugins: [
        [
          "import",
          {
            "libraryName": "antd",
            "style": "css"
          }
        ]
      ]
    },
    development: {
      presets: ['next/babel'],
      plugins: [
        [
          "import",
          {
            "libraryName": "antd",
            "style": "css"
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ],
        [
          'next/babel',
          {
            'styled-jsx': {
              'babel-test': true
            }
          }
        ]
      ],
      plugins: ['babel-plugin-dynamic-import-node']
    }
  }
};
