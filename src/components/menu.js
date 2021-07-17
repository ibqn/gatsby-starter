import React from "react"
import { Link } from "gatsby"

const Menu = () => (
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

export default Menu
