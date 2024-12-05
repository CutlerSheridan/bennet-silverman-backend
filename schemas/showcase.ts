import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'
import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
	name: 'showcase',
	title: 'Showcases',
	type: 'document',
	icon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 100,
			},
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
		defineField({
			name: 'client',
			title: 'Client Name',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'Roles',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: ['Writer', 'Director', 'Producer']
			}
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		}),

		defineField({
			name: 'videos',
			title: 'Videos',
			type: 'array',
			of: [{ type: 'video' }],
		}),
		
	

	],
	// preview: {
	// 	select: {
	// 		title: 'title',
	// 		date: 'releaseDate',
	// 		media: 'poster',
	// 		castName0: 'castMembers.0.person.name',
	// 		castName1: 'castMembers.1.person.name',
	// 	},
	// 	prepare(selection) {
	// 		const year = selection.date && selection.date.split('-')[0]
	// 		const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

	// 		return {
	// 			title: `${selection.title} ${year ? `(${year})` : ''}`,
	// 			date: selection.date,
	// 			subtitle: cast,
	// 			media: selection.media,
	// 		}
	// 	},
	// },
})
