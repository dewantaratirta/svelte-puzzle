import adapter from '@sveltejs/adapter-auto';
import statics from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// kit: {
	// 	adapter: adapter(),
	// 	alias: {
	// 		$components: "src/components",
	// 	}
	// },
	kit: {
		adapter: statics({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/components'
		}
	}
};

export default config;
