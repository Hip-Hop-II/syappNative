// import React, { PureComponent } from "react"
// import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
// import { Camera, FileSystem } from 'expo'
// import {Ionicons} from '@expo/vector-icons'

// export default class CameraScreen extends PureComponent {
//   static navigationOptions = {
//     header: null
//   }
//   takePictureOnpress = async () => {
//     try {
//       alert('on')
//       this.camera.takePictureAsync({onPictureSaved: this.onPictureSaved})
//     } catch (error) {
//       throw error
//     }
//   }
//   onPictureSaved = async (photo) => {
//     try {
//       await FileSystem.moveAsync({
//         from: photo.uri,
//         to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`
//       })
//     } catch (error) {
//       throw error
//     }
//   }
//   render() {
//     return (
//       <View style={styles.wrapper}>
//         <StatusBar barStyle="light-content" />
//         <Camera
//           style={styles.privew}
//           ref={ref => {
//             this.camera = ref
//           }}
//           type="back"
//           flashMode="off"
//           permissionDialogTitle={"Permission to use camera"}
//           permissionDialogMessage={
//             "We need your permission to use your camera phone"
//           }
//           onGoogleVisionBarcodesDetected={({ barcodes }) => {
//             console.log(barcodes)
//           }}
//         />
//         <TouchableOpacity style={styles.cameraButton} onPress={this.takePictureOnpress}>
//           <Ionicons name="ios-camera" size={100} />
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1
//   },
//   privew: {
//     flex: 1
//   },
//   cameraButton: {
//     position: 'absolute',
//     bottom: 40,
//     alignSelf: 'center'
//   }
// })
