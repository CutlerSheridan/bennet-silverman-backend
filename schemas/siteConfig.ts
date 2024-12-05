import { defineField, defineType } from 'sanity'
import { MdBuild } from 'react-icons/md'


export default defineType({
	name: 'siteConfig',
	title: 'Site Configuration',
	type: 'document',
	icon: MdBuild,
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'contact',
			title: 'Contact',
		},
		{
			name: 'bio',
			title: 'Bio',
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Site Title',
			type: 'string',
			validation: Rule => Rule.required(),
			group: 'seo'
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
		}),
		defineField({
			name: 'mainWorks',
			title: 'Main Works To Showcase On The Main Banner',
			type: 'array',
			of: [{
				type: 'reference',
				to: [
					{ type: 'work' },
				]
			}],
		}),
		defineField({
			name: 'numWorksColumns',
			title: 'Number of Works Columns on Homepage',
			type: 'number',
		}),
		defineField({
			name: 'bio',
			title: 'Bennet Bio',
			type: 'blockContent',
			validation: Rule => Rule.required(),
			group: ['bio']
		}),
		defineField({
			name: 'bioImages',
			title: 'Bio Images',
			type: 'array',
			of: [{ type: 'image', options: {
				hotspot: true,
			}}],
			group: ['bio']
		}),
		// defineField({
		// 	name: 'contactEmail',
		// 	title: 'Contact Email',
		// 	type: 'string',
		// 	validation: Rule => Rule.required() && Rule.email(),
		// 	group: 'contact'
		// }),
		// defineField({
		// 	name: 'about',
		// 	title: 'About',
		// 	type: 'blockContent',
		// }),
		defineField({
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
			group: 'seo'

		}),


		// defineField({
		// 	name: 'contactRepresentation',
		// 	title: 'Contact Blurb/Representation',
		// 	type: 'blockContent',
		// 	group: 'contact',

		// }),
		defineField({
			name: 'contactLinks',
			title: "Web Links",
			type: 'array',
			of: [{ type: 'webLink' }],
			group: 'contact',
		})
		// defineField({
		// 	name: 'backgroundImage',
		// 	title: 'Background Image',
		// 	type: 'image',
		// 	options: {
		// 		hotspot: true,
		// 	},
		// }),
		// defineField({
		// 	name: 'socials',
		// 	title: 'Social Media',
		// 	type: 'array',
		// 	of: [{ type: 'socialLink' }],
		// }),
	],
})