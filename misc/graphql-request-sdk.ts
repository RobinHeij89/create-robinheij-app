import { getSdk } from '@generated/graphql-request'
import { GraphQLClient } from 'graphql-request'
import { getCmsUrl } from './environments'

export function createGraphqlRequestSdk (language = '', url = new URL(getCmsUrl())): ReturnType<typeof getSdk> {
  const graphqlUrl = `${url.href}${language}/graphql`
  const client = new GraphQLClient(graphqlUrl)

  return getSdk(client)
}
