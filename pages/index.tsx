import Layout from 'components/Layouts/MainLayout'
import { ReactElement } from 'react'

interface Props {}

const Page = ({}: Props) => {
  return <>Hello World</>
}

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default Page
