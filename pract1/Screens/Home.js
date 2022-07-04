import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTabs />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:'5%'
    },
})
export default Home;