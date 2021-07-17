import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const About = () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header title="About page" />
      <p>okey</p>
      {[1, 2, 3].map((v) => (
        <img key={v} src="https://source.unsplash.com/random/400x200" alt="" />
      ))}
    </div>
  </Layout>
)

export default About
