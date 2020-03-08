module.exports = {
  env: {
    production: {
      presets: ['next/babel']
    },
    development: {
      presets: ['next/babel']
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
