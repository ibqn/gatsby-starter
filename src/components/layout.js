import React from "react"
import { Link } from "gatsby"

const LinkList = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ textTransform: `uppercase` }}>
      {props.children}
    </Link>
  </li>
)

const Layout = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: `650px`, padding: `0 1rem` }}>
    <header
      style={{
        marginBottom: `1.5rem`,
        display: `flex`,
        alignItems: `baseline`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          textShadow: `none`,
          backgroundImage: `none`,
        }}
      >
        <h3 style={{}}>MySite</h3>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <LinkList to="/">home</LinkList>
        <LinkList to="/about/">about</LinkList>
        <LinkList to="/contact">contact</LinkList>
      </ul>
    </header>
    {children}
  </div>
)

export default Layout
