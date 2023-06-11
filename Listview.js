import React, { useState } from "react";
import { Text, View,  SafeAreaView } from "react-native";
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
}