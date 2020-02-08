import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"

export default () => (
  <>
    <Menu />
    <div style={{ color: `purple`, fontSize: `24px` }}>
      <Header title="Hello world!" />
      <p>beautiful</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </>
)
