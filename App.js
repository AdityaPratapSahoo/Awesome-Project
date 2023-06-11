import Listview from "./Listview";

//flag program
/*import { StatusBar } from 'expo-status-bar';
import { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export class Flag extends PureComponent{
  render(){
    return(
      <SafeAreaView style={{flex:1}}>


        <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}
      >
          <Text style={{width:250 , height:70,backgroundColor:'orange'}}>       </Text>
          <Text style={{width:250 , height:70,fontSize:100, textAlign:'center',fontWeight:'bold', color:'',backgroundColor:''}}>*</Text>
          <Text style={{width:250 , height:70,backgroundColor:'green'}}>       </Text>
        
        </View>
        </SafeAreaView>
    );
  }
}

export default Flag;*/

//trying for division concept
/*import { StatusBar } from 'expo-status-bar';
import { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export class Flag extends PureComponent{
  render(){
    return(
      <SafeAreaView style={{flex:1}}>


        <View
        style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
          <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'#ADD8E6'}}>NPM </Text>
          <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'#ADD8E6'}}>NPM </Text>
          <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:''}}>vs</Text>
          <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'#FFCCCB'}}> YARN</Text>
        
        </View>
        </SafeAreaView>
    );
  }
}

export default Flag; */



// props program
/*import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const New = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello, I am {props.name}!</Text>
    </View>
  );
}
const App = () => {
  return (
    <View style={styles.container}>
      <New name="Aditya" />
    <New name="React Native" />
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  color:'blue'
  },
});*/







//TRYING FOR LUDO BASE
//-------------------------------------------------------------------------------------------------------------------------------------
/*export default function Ludo() {
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Ludo title={::} style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'yellow'}}/>
          <Ludo title={::} style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'green'}}/>
          <Ludo title={::} style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'red'}}/>
          <Ludo title={::} style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'blue'}}/>
        </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
});


        <View
        style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          // justifyContent:'flex-end',
          // justifyContent:'flex-start',
          // justifyContent:'space-around',
          // justifyContent:'space-between',
          justifyContent:'space-evenly'
        }}
      >
          <Text style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'yellow'}}>: :</Text>
          <Text style={{height:70, width:120 , fontWeight:'bold', color:'',backgroundColor:''}}></Text>
          <Text style={{height:100, width:100,fontSize:90, textAlign:'center',fontWeight:'bold' ,backgroundColor:'green'}}>: :</Text>
        
        </View>
        </SafeAreaView>
    );
  }
}

export default Flag;*/





// ANOTHER METHOD FOR USING PROPS
// ------------------------------------------------------------------------------------------------------------------------------------
/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Exporting default component
export default function App() {
return (
  <View style={styles.container}>
  <View style = {styles.style1} />
  <View style = {styles.style2}/>
  <View style = {styles.style3}/>
  <View style = {styles.style4}/>
  </View>
);
}

styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:'row',
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
style1:{
  backgroundColor: "red",
  height: 100,
  width: 200
},
style2:{
  backgroundColor: "green",
  height: 90,
  width: 50
},
style3:{
  backgroundColor: "blue",
  height: 80,
  width: 50
}
}); */



//USING OF USE
//STATE 
//------------------------------------------------------------------------------------------------------------------
/*import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Button
        title="Change State"
        onPress={() => {
          setNumber(number + 1);
        }}
      />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 20,
    color: "#228B22",
    fontWeight: "bold",
  },
});*/





//flag program
// import { StatusBar } from 'expo-status-bar';
// import { PureComponent } from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// export class Flag extends PureComponent{
//   render(){
//     return(
//       <SafeAreaView style={{flex:1}}>


//         <View
//         style={{
//           flex:1,
//           flexDirection:'row',
//           padding:"50%",
//           // alignItems:'center',
//           justifyContent:'center',
//         }}
//       >
//           <Text style={{width:100 , height:100,fontSize:80, textAlign:'center', justifyContent:'center',fontWeight:'bold',backgroundColor:'yellow'}}></Text>
//           <View style={{width:130 , height:70,fontSize:100, textAlign:'center',fontWeight:'bold', color:'',backgroundColor:''}}></View>
//           <View style={{width:100 , height:100,backgroundColor:'green'}}></View>

//         </View>

//         <View
//         style={{
//           flex:1,
//           flexDirection:'row',
//           // padding:80,
//           // alignItems:'center',
//           justifyContent:'center',
//         }}
//       >
//           <View style={{width:100 , height:100,fontSize:90, textAlign:'center',fontWeight:'bold',backgroundColor:'pink'}}></View>
//           <View style={{width:130 , height:70,fontSize:100, textAlign:'center',fontWeight:'bold', color:'',backgroundColor:''}}></View>
//           <View style={{width:100 , height:100,backgroundColor:'red'}}></View>

//         </View>
//         </SafeAreaView>
//     );
//   }
// }

// export default Flag;



//List view
//-----------------------------------------------------------------------------------------------------------------------------
/*import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
// import Button from "./Button";
import styles from "./Style";

export default function App() {
  const [List, setList] = useState([
    {
      Name: "Aditya Pratap Sahoo",
      RegdNo: 2105274008,
      Dept: "MCA",
      SEC:"A",
    },
    {
      Name: "Adarsh Kumar Sahoo",
      RegdNo: 2105274007,
      Dept: "MCA",
      SEC:"A",
    },
    {
      Name: "Amit Kumar Behera",
      RegdNo: 2105274008,
      Dept: "MCA",
      SEC:"A",
    },
    {
      Name: "Sambhav Kumar Sahoo",
      RegdNo: 2105274084,
      Dept: "MCA",
      SEC:"B",
    },
    {
      Name: "Muskan Mittal",
      RegdNo: 2105274051,
      Dept: "MCA",
      SEC:"A",
    },
    {
      Name: "Muskan Mittal",
      RegdNo: 2105274051,
      Dept: "MCA",
      SEC:"A",
    },
    {
      Name: "Smruti Behera",
      RegdNo: 2105274114,
      Dept: "MCA",
      SEC:"B",
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {List.map((item, index) => {
          return (
            
            <View style={styles.flagView} key={item}>
            <View style={styles.item}>
              <Text style={styles.Name}>Name: {item.Name} </Text>
              <Text style={styles.RegdNo}> RegdNo: {item.RegdNo}</Text>
              <Text style={styles.Dept}> Dept: {item.Dept}</Text>
              <Text style={styles.SEC}> SEC: {item.SEC}</Text>
            </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}*/
//registaion form
//-------------------------------------------------------------------------------------------------------------------------------------------
/*import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    firstname: '',lastname: '', email: '',gender: '', phone_number: '', day: '', month: '',year: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    // const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder='ABS'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('firstname', val)}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('lastname', val)}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Text style={styles.text}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder='Gender'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('gender', val)}
        />
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <View style={[styles.day]}>
        <Text style={[styles.input]}>BIRTHDAY</Text>
        <TextInput
          style={styles.day}
          //style={{flex: 0.1, backgroundColor:"green"}}
          placeholder='DAY'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('day', val)}
        />
        <TextInput
          style={styles.day}
          //style={{flex: 0.1, backgroundColor:"green"}}
          placeholder='MONTH'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('month', val)}
        />
        </View>

      <Button
        title="SUBMIT"
      />
      </View>

      
        
    )
  }
}

const styles = StyleSheet.create({
  text:{
    width: "100%",
    color: 'black',
    marginVertical:"2%",
    fontSize: 17,
    fontWeight:'bold'
  },
  dob:{
    // width: "100%",
    // color: 'black',
    // marginVertical:"2%",
    // fontSize: 17,
    // fontWeight:'bold'
    
    // width: "100%",
    // color: 'black',
    // marginVertical:"2%",
    // fontSize: 17,
    // fontWeight:'bold',
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  
  },
  input: {
    width: "100%",
    height: "4%",
    backgroundColor: 'lightpink',
    color: 'white',
    marginVertical:"2%",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '100'
  },
  container: {
    flex: 1,
    padding:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green'
  },
  day:{
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:"center",
    // textAlign:"center",
    // width:"30%",
    // height:30,
    
    
    // backgroundColor: 'lightpink',
    // color: 'white',
    // marginVertical:"2%",
    // borderRadius: 10,
    // fontSize: 18,
    // fontWeight: '100'
  },
})*/


{/* <View
        style={{
          flex:0.1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
          <TextInput style={{fontSize:30,width:50,fontWeight:'100',backgroundColor:'#ADD8E6'}} placeholder="Day" />
          <Text style={{fontSize:50,marginLeft:15,fontWeight:'bold',backgroundColor:'#ADD8E6'}}>NPM </Text>
          <Text style={{fontSize:50,fontWeight:'100',backgroundColor:'#FFCCCB'}}> YARN</Text>
        
        </View>
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View> */}


// import {
//   View,
//   Text,
//   Image,
//   SafeAreaView,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Pressable,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import { useState } from 'react';

// //import {} from 'react-native-safe-area-context';
// //import style from './style';
// import styles from './Style';

// export default function SignIn({ navigation }) {
//   const [name, setname] = useState('');
//   const [phoneno, setphoneno] = useState('');
//   const [email, setemail] = useState('');
//   const [gender, setgender] = useState('');
//   const [password, setpassword] = useState('');
//   const onHandleContinue = () => {
//     if (name === '') {
//       Alert.alert('Please enter phone number or email-id');
//     } else if (phoneno === '') {
//       Alert.alert('Please enter the Phone number');
//     } else if (email === '') {
//       Alert.alert('Please enter the email');
//     } else if (gender === '') {
//       Alert.alert('Please select your gender');
//     } else if (password === '') {
//       Alert.alert('Please enter the password');
//     } else {
//       Alert.alert('Sign-in Successfully');
//     }
//   };
//   return (
//     // <SafeAreaView>


//       <View style={styles.body}>
//         <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
//           <View style={styles.container}>
//             <Text style={styles.title}>Welcome to Ping-UL-Mobile</Text>
//             {/* <Image
//             style={styles.Img}
//             source={require('./assets/favicon.png')}
//           /> */}
//             <Text style={styles.create}>Create an Account</Text>
//             <View>
//               < Text style={[styles.field1]}>
//               </Text>
//               <TextInput
//                 value={name}
//                 style={styles.input1}
//                 placeholder="Enter Name"
//                 keyboardType="default"
//                 onChangeText={text => setname(text)}
//               />
//               <TextInput
//                 value={phoneno}
//                 style={styles.input1}
//                 placeholder="Phone Number"
//                 keyboardType=""
//                 onChangeText={text => setphoneno(text)}
//               />
//               <TextInput
//                 value={email}
//                 style={styles.input1}
//                 placeholder=" Email-Id"
//                 keyboardType=""

//                 onChangeText={text => setemail(text)}
//               />
//               <TextInput
//                 value={gender}
//                 style={styles.input1}
//                 placeholder="Gender"
//                 keyboardType=""
//                 //secureTextEntry={true}
//                 onChangeText={text => setgender(text)}
//               />
//               <TextInput
//                 value={password}
//                 style={styles.input1}
//                 placeholder="Password"
//                 keyboardType=""
//                 secureTextEntry={true}
//                 onChangeText={text => setpassword(text)}
//               />
//               <TouchableOpacity style={styles.btn} onPress={() => onHandleContinue()}>
//                 <Text style={styles.text}>Create Account</Text>
//               </TouchableOpacity>
//               <View style={styles.box}>
//                 <View>
//                   <Text style={styles.newacc}>Already have an account?</Text>
//                 </View>
//                 <View>
//                   <TouchableOpacity>
//                     <Text style={styles.signin}>SignIn</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     // </SafeAreaView >
//   );
// }

// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
//     <View>
//       <Text style={{flex:1,justifyContent:"center",alignItems:"center", backgroundColor:"red"}}>App</Text>     
//     </View>
//     </ScrollView>
//   )
// }

import { Shadow } from 'react-native-neomorph-shadows';
<Shadow
  inner // enable inner shadow
  useArt // set this prop to use non-native shadow on ios
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "grey",
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 100,
    height: 100,
    // ...include most of View/Layout styles
  }}
>
</Shadow>