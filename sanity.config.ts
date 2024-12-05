	import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { colorInput } from "@sanity/color-input";
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Bennet Silverman',

  projectId: 'taxyp2g2',
  dataset: 'production',

  plugins: [
    deskTool({
		structure: myStructure
	}),
    visionTool(),
    colorInput(),
    //googleMapsInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
