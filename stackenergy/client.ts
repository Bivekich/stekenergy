import {createClient, type ClientConfig} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: 'l31d3diy',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-09-04', // use current date (YYYY-MM-DD) to target the latest API version
}
export const client = createClient(config)

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
