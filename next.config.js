
const cfg = {
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers () {
    return [
      {
        locale: false,
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors self ${process.env.WEBSITE_CMS_URL} *.platform.sh`
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  async rewrites () {
    return {
      beforeFiles: [
        {
          source: '/robots.txt',
          destination: '/api/robots'
        }
      ],
      afterFiles: [],
      fallback: []
    }
  },
  async redirects () {
    return [{
      source: '/hello',
      destination: '/',
      permanent: true
    }]
  },
  poweredByHeader: false,
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }
      ]
    })

    return config
  }
}

module.exports = cfg
