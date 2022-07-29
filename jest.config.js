const glob                  = require('glob').sync;
const { resolve, basename } = require('path');

const { WPDIR } = process.env;
const wpDir     = WPDIR ? resolve(WPDIR) : resolve(__dirname, '../../..');
const wpDist    = `${wpDir}/wp-includes/js/dist`;

const { DIVIDIR } = process.env;
const diviDir     = DIVIDIR ? resolve(DIVIDIR) : resolve(__dirname, '../../themes/Divi');
const diviDist    = `${diviDir}/includes/builder/visual-builder/build`;

const wpPackages = glob(`${wpDist}/*.js`)
  .filter(name => 0 > name.indexOf('.min.js'))
  .map(name => basename(name, '.js'));

const diviPackages = glob(`${diviDist}/*.js`)
  .map(name => basename(name, '.js'));

module.exports = {
  rootDir:          './',
  moduleNameMapper: {
    [`@wordpress\\/(${wpPackages.join('|')})$`]: `${wpDist}/$1.js`,
    [`@divi\\/(${diviPackages.join('|')})$`]:    `${diviDist}/$1.js`,
    '^lodash$':                                  `${wpDist}/vendor/lodash.js`,
    '^react$':                                   `${wpDist}/vendor/react.js`,
    '^react-dom$':                               `${wpDist}/vendor/react-dom.js`,
  },
  preset:     '@wordpress/jest-preset-default',
  snapshotSerializers: ['enzyme-to-json/serializer', '@emotion/jest'],
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/babel-transformer.js',
  },
  setupFilesAfterEnv: [
    `${wpDist}/vendor/wp-polyfill`,
    `${wpDist}/vendor/wp-polyfill-fetch`,
    `${wpDist}/vendor/wp-polyfill-node-contains`,
    `${wpDist}/vendor/wp-polyfill-dom-rect`,
    `${wpDist}/vendor/wp-polyfill-url`,
    `${wpDist}/vendor/wp-polyfill-formdata`,
    `${wpDist}/vendor/wp-polyfill-element-closest`,
    `${wpDist}/dom-ready`,
    `${wpDist}/hooks`,
    `${wpDist}/i18n`,
    `${wpDist}/a11y`,

    // `${wpDist}/vendor/react`,
    // `${wpDist}/vendor/react-dom`,
    // `${wpDist}/vendor/lodash`,
    // `${wpDist}/vendor/moment`,

    `${wpDist}/escape-html`,
    `${wpDist}/element`,
    `${wpDist}/is-shallow-equal`,
    `${wpDist}/priority-queue`,
    `${wpDist}/compose`,
    `${wpDist}/deprecated`,
    `${wpDist}/dom`,
    `${wpDist}/keycodes`,
    `${wpDist}/primitives`,
    `${wpDist}/redux-routine`,
    `${wpDist}/data`,

    // `${wpDist}/rich-text`,
    // `${wpDist}/warning`,
    `${wpDist}/components`,

    // `${wpDist}/autop`,
    // `${wpDist}/blob`,
    `${wpDist}/block-serialization-default-parser`,

    // `${wpDist}/html-entities`,
    // `${wpDist}/shortcode`,
    `${wpDist}/blocks`,

    // `${wpDist}/keyboard-shortcuts`,
    // `${wpDist}/notices`,
    // `${wpDist}/token-list`,
    // `${wpDist}/url`,
    // `${wpDist}/viewport`,
    // `${wpDist}/wordcount`,
    `${wpDist}/block-editor`,

    // `${wpDist}/dom-ready`,
  ],
}