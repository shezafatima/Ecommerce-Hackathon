import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { tag } from './tags'
import { orderType } from './orderTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,tag,orderType],
}
