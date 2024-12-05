import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineType({
	name: 'video',
	title: 'Video',
	type: 'object',
	icon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'videoUrl',
			title: 'Video URL',
			type: 'url',
		}),
	],
})
