const withOffline = require('next-offline');

const nextConfig = {
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		};

		return config
	}
};

module.exports = withOffline(nextConfig);
