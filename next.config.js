// next.config.js

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
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
  ],
}