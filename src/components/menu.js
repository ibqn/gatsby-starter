import React from "react"
import { Link } from "gatsby"

export default () => (
  <ul>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
    <li>
      <Link to="/modules">modules</Link>
    </li>
  </ul>
)
