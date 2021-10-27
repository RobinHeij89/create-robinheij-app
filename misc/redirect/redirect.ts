import { hasValue } from '@misc/helpers'
import { createGraphqlRequestSdk } from '../graphql-request-sdk'

interface GetRedirectReturnProps {
  redirect: {
    destination: string
    permanent: boolean
  }
}

export async function getRedirect (
  path: string,
  sdk: ReturnType<typeof createGraphqlRequestSdk>
): Promise<GetRedirectReturnProps | null> {
  try {
    const result = await sdk.Redirect({ path })

    if (!hasValue(result.redirect)) {
      return null
    }

    return {
      redirect: {
        destination: result.redirect.destination,
        permanent: result.redirect.status === 301
      }
    }
  } catch (e) {
    console.warn(e)
    return null
  }
}
