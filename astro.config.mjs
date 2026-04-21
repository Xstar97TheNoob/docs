// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Xstar's HomeLab",
			plugins: [
				starlightBlog({
					authors: {
						noob: {
						name: 'Xstar97TheNoob',
						title: 'Xstar97TheNoob',
						picture: '/noob.svg', // Images in the `public` directory are supported.
						url: 'https://Xstar97TheNoob.com',
						},
					},
					})
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				}
			],
		}),
	],
});
