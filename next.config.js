/** @type {import('next').NextConfig} */

// @ts-check

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    const isDevServer = phase === PHASE_DEVELOPMENT_SERVER

    return {
        trailingSlash: true,
        images: {
            unoptimized: true,
            loader: 'default',
            minimumCacheTTL: 60,
        },
    }
}