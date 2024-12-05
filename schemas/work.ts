import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'
import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
	name: 'work',
	title: 'Work',
	type: 'document',
	icon,
	fields: [
		orderRankField({ type: "work" }),
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
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'videoUrl',
			title: 'Video URL',
			type: 'url',
		}),
		defineField({
			name: 'videoLoop',
			title: 'Video Loop',
			type: 'file',
			options: {
				accept: 'video/*,image/*'
			}
		}),
		// defineField({
		// 	title: 'Showcase Link?',
		// 	name: 'showcase',
		// 	type: 'reference',
		// 	to: [{ type: 'showcase' }]
		// }),
		defineField({
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'type',
			title: 'Video Type',
			type: 'string',
			options: {
				list: ['Commercial', 'Narrative', 'Sketch', "Reel"]
			},
		}),

		defineField({
			name: 'featured',
			title: 'Featured?',
			type: 'boolean',
			initialValue: false,
		}),
		
		defineField({
			name: 'role',
			title: 'Roles',
			type: 'role',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'blockContent',
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
