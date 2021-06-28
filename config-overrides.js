const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@base-color': '#3F51B5',
      '@font-family-base': 'Raleway, sans-serif',
      '@border-radius-base': '30px',
    },
  })
);
