
import React from "react"
import Helmet from 'react-helmet'
import Layout from "../../../components/examples/layout/1"
import ExampleMarkupBarf from "../../../components/examples/example-markup-barf.js"

const Example3 = (props) => {
  return (
    <Layout>
      <Helmet title="Example 3" />
      <ExampleMarkupBarf title="But is this that cool?" subtitle="I think so..."  />
      <ExampleMarkupBarf title="Why are we handling content in react?" subtitle="we'll get to that later..."  />
    </Layout>
  )
}

export default Example3