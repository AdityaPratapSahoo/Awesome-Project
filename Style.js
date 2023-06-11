// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal:15,
//   },
//   flagView: {
//     width: 250,
//     height: 80,
//     backgroundColor: "#B6848C",
//     marginVertical:2,
//     alignItems:'center', justifyContent:'center'
//   },
//   Name:{
//     fontWeight:"bold"
//   },
//   RegdNo:{
//     fontWeight:"bold"
//   },
//   SEC:{
//     fontWeight:"bold"
//   },
//   Dept:{
//     fontWeight:"bold"
//   }
// //   flagView1: {
// //     width: 100,
// //     height: 50,
// //     backgroundColor: "orange",
// //     marginRight: "5%",
// //   },
// //   star: {
// //     width: 250,
// //     height: 70,
// //     fontSize: 100,
// //     textAlign: "center",
// //     fontWeight: "bold",
// //     color: "",
// //     backgroundColor: "",
// //   },
// //   circle: {
// //     height: 40,
// //     width: 40,
// //     borderRadius: 20,
// //     borderWidth: 2,
// //   },
// });

// export default styles;
      

import {Dimensions, Platform, StyleSheet} from 'react-native';

// import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container:{
    //flex:0.1,
    width:"100%",
    height:"100%",
    //paddingHorizontal:"20%",
    backgroundColor:"#ffffff",
  },
  body: {
    flex:1,
    padding: '5%',
    width: '100%',
    paddingVertical:"40%",
    // backgroundColor:"#66cdaa",
  },
  title: {
    color: '#000',
    fontSize: 24,
    // marginTop: 10,
    
  },
  field1: {
    color: '#000',
    fontSize: 18,
    padding: 5,
    marginTop:1,
  },
  input1: {
    marginBottom: 15,
    height: 45,
    width: '100%',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#000',
    color: '#000',
  },
  text: {
    color: '#fff',
    fontSize:20,
  },
  fp: {
    color: '#000',
    fontSize: 16,
    marginTop: 20,
  },
  newacc: {
    color: '#000',
    fontSize: 16,
    marginTop: 10,
  },
  box: {
    flexDirection: 'row',
    marginTop:8
  },
  signin: {
    color: 'blue',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16,
  },
  Img:{
    resizeMode: "stretch",
            height: 100,
            width: 200
  },
  create:{
    fontSize:20,
    fontWeight:"500",
    marginTop:25
  },
  btn:{
    width:"100%",
    borderRadius:8,
    padding:10,
    backgroundColor:"blue",
    alignItems:"center",
  }
});

export default styles;
