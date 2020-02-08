import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header title="About page" />
    <p>okey</p>
    {[1, 2, 3].map(v => (
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    ))}
  </div>
)
