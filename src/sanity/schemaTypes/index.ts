import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { dress } from './dress'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,dress],
}
