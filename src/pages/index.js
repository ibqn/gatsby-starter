import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const Index = () => (
  <Layout>
    <div style={{ color: `purple`, fontSize: `24px` }}>
      <Header title="Hello world!" />
      <p>beautiful</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
)

export default Index
