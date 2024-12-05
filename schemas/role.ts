import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineField({
	name: 'role',
	title: 'Roles',
	type: 'array',
	of: [{ type: 'string' }],
	options: {
		list: ['Writer', 'Director', 'Producer', 'Editor', 'Co-Writer']
	}
})
