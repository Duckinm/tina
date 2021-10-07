import { BRANCH, CLIENT_ID, IS_LOCAL_CLIENT, ORGANIZATION } from 'lib/constants'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ReactElement, ReactNode } from 'react'
import 'tailwindcss/tailwind.css'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={CLIENT_ID}
            branch={BRANCH}
            organization={ORGANIZATION}
            isLocalClient={Boolean(Number(IS_LOCAL_CLIENT ?? true))}
            {...pageProps}
          >
            {(livePageProps: any) =>
              getLayout(<Component {...livePageProps} />)
            }
          </TinaCMS>
        }
      >
        getLayout(
        <Component {...pageProps} />)
      </TinaEditProvider>
    </>
  )
}

export default App
