import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import AddressBar from '../components/AddressBar'

class First extends Component {
  state = {
    location: {
      latitude: 14.562449,
      longitude: 121.016743,
      latitudeDelta: 0.0051,
      longitudeDelta: 0.0051
    },
    address: []
  }
  async componentWillMount() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      // this.setState({
      //   errorMessage: 'Permission to access location was denied',
      // })
    }
    try {
      let location = await Location.getCurrentPositionAsync({})
      if (location) {
        this.setState({location: {...this.state.location, ...location}})
        let address = await Location.reverseGeocodeAsync({...this.state.location, ...location})
        this.setState({address})
      }
      
    } catch (error) {
      throw error
    }
  }
  mapOnPress = (event) => {
    console.log(event)
  }
  render() {
    const {location} = this.state
    return (
      <View style={styles.container}>
        
        <View style={styles.tools}>
          <AddressBar address={this.state.address} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  tools: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20
  }
})

export default First
