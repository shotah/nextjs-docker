// next.config.js

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  domains: [
    {
      domain: 'bldhosting.com',
      defaultLocale: 'en-US',
    },
    {
      domain: 'localhost',
      defaultLocale: 'en-US',
    },
  ],
}