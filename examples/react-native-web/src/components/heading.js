import React from 'react'
import { StyleSheet, Text } from 'react-native-web'

export default function Heading({ children, level }) {
  return <Text style={[styles.heading, styles[`h${level}`]]}>{children}</Text>
}

const styles = StyleSheet.create({
  heading: {
    margin: 0,
    padding: 0,
    fontWeight: `bold`
  },
  h1: {
    fontSize: 32,
    marginBottom: 16
  },
  h2: {
    fontSize: 28,
    marginBottom: 8
  },
  h3: {
    fontSize: 24,
    marginBottom: 6
  },
  h4: {
    fontSize: 22,
    marginBottom: 4
  },
  h5: {
    fontSize: 20,
    fontWeight: `normal`,
  },
  h6: {
    fontSize: 16,
    fontWeight: `normal`,
    fontStyle: `italic`
  }
})