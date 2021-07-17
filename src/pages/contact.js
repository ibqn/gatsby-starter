import React from "react"
import {
  user,
  description,
  username,
  excerpt,
  avatar,
} from "./contact.module.scss"
import Layout from "../components/layout"

const User = (props) => (
  <div className={user}>
    <img src={props.avatar} className={avatar} alt="" />
    <div className={description}>
      <h2 className={username}>{props.username}</h2>
      <p className={excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const Contact = () => (
  <Layout>
    <h1>Modules</h1>
    <p>beautiful</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Layout>
)

export default Contact
