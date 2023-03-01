import * as Prismic from '@prismicio/client'

const endpoint = Prismic.getRepositoryEndpoint(
  process.env.PRISMIC_API_REPOSITORY!,
)

export function getPrismicClient(req?: any) {
  const prismic = Prismic.createClient(endpoint, {
    fetch,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  prismic.enableAutoPreviewsFromReq(req)
  return prismic
}
