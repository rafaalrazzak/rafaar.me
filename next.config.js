const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')

const withTM = require('next-transpile-modules')(['three',])

const nextTranslate = require('next-translate-plugin')

const nextConfig = {
	compress: true, reactStrictMode: true, pageExtensions: ['js', 'jsx', 'md', 'mdx'], images: {
		domains: ['i.scdn.co', 'source.unsplash.com', 'encrypted-tbn0.gstatic.com', 'res.cloudinary.com', "images.unsplash.com", "vercel.com", "s3-us-west-2.amazonaws.com"],
	}, webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/, use: ['@svgr/webpack'],
		})

		config.module.rules.push({
			test: /\.(glb|gltf)$/, exclude: /node_modules/, use: ['file-loader'],
		})

		config.module.rules.push({
			test: /react-spring/, sideEffects: true,
		})

		return config
	},
}

module.exports = withPlugins([[nextTranslate], [withBundleAnalyzer], [withTM]], nextConfig)
