// import {ImagePicker, Permissions} from 'expo'

// const launchImage = async (options = {}) => {
//   let defaultOptions = {
//     allowsEditing: true,
//     aspect: [4, 3]
//   }
//   try {
//     const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
//     if (status === 'granted') {
//       const result = await ImagePicker.launchImageLibraryAsync({...defaultOptions, ...options})
//       if (!result.cancelled) {
//         Promise.resolve(result)
//       } else {
//         Promise.reject('No success')
//       }
//     } else {
//       Promise.reject('No success')
//     }
//   } catch (error) {
//     Promise.reject(error)
//   }
// }

// export {launchImage}
