import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'webLink',
	title: 'Web Link',
	type: 'object',
	fields: [
		defineField({
			name: 'type',
			title: 'Web Link',
			type: 'string',
			options: {
				list: [
					'Instagram',
					'Facebook',
					'LinkedIn',
					'Snapchat',
					'TikTok',
					'Vimeo',
					'YouTube',
					'Email',
				],
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: Rule => Rule.required().uri({
				scheme: ['http', 'https', 'mailto', 'tel'],
			}),
		}),
	],
	preview: {
		select: {
			subtitle: 'url',
			title: 'type',
		},
	},
})