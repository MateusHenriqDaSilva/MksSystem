const { withNextVideo } = require('next-video/process')

/**  @type {import('next').NextConfig}  */
const nextConfig =  {
    experimental:  {
      typedRoutes: true,
    },
  }
  module.exports =  withNextVideo(nextConfig)
