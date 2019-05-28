import React from "react"

import Heading from '../components/heading'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Heading level={1}>Hello from react-native-web!</Heading>
    <Heading level={2}>Hello (2)!</Heading>
    <Heading level={3}>Hello (3)!</Heading>
    <Heading level={4}>Hello (you get the idea)!</Heading>
    <Heading level={6}>Maybe adding a button (with <code>Touchable</code>) would be a good addition?</Heading>
  </Layout>
)
