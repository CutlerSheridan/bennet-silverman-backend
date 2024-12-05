
import { MdBuild, MdLocalMovies  } from 'react-icons/md'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const myStructure = (S, context) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Site Configuration')
				.icon(MdBuild)
				.child(
					S.document()
						.schemaType('siteConfig')
						.documentId('siteConfig')),
			// Minimum required configuration
			orderableDocumentListDeskItem({
				type: 'work', 
				title: 'Works', 
				icon: MdLocalMovies,
				S, context}),
			...S.documentTypeListItems().filter(listItem => !['siteConfig', 'work'].includes(listItem.getId()))
		])