// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
            logo: {
                src: './src/assets/logo.svg',
                replacesTitle: true
            },
            favicon: '/favicon.png',
            lastUpdated: true,
            plugins: [
                starlightOpenAPI([
                    {
                        base: 'api',
                        label: 'API',
                        schema: 'https://raw.githubusercontent.com/gravitl/netmaker/refs/heads/master/swagger.yaml',
                    },
                ]),
                starlightThemeRapide(),
            ],
			title: 'Netmaker Docs',
			social: {
				github: 'https://github.com/gravitl/netmaker/',
                discord: 'https://discord.gg/zRb9Vfhk8A'
			},
            expressiveCode: {
                themes: ['catppuccin-mocha', 'catppuccin-latte'],
            },
            customCss: [
                './src/styles/colors.css',
            ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Server Installations',
					autogenerate: { directory: 'server_installations' },
				},
                ...openAPISidebarGroups,
			],
		}),
	],
});
