'use strict';

const {NextConfig} = require('next');

/** @type {NextConfig} */
module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  devIndicators: {
    buildActivity: false,
  },
  swcMinify: true,
};
