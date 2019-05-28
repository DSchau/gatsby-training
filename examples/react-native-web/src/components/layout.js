import React from 'react'
import { View, StyleSheet } from 'react-native-web'

export default function Layout({ children }) {
  return (
    <View>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8
  }
})