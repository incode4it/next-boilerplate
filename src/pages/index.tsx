import Layout from '../components/Layout'
import SvgStar from '../components/icons/Star'
import { Flex } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout title="Home | Website">
      <Flex direction="column" align="center" justify="center">
        <h1>Hello World</h1>
        <div>Regular</div>
        <div style={{ fontWeight: 'bold' }}>Bold</div>
        <SvgStar />
      </Flex>
    </Layout>
  )
}

export default IndexPage
