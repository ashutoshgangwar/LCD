import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ParkingUI = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image 
          source={require('./../assets/images/logo.png')} // Replace with your logo
          style={styles.logo}
        />        
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcomes you to</Text>

      {/* TSRTC Section */}
      <Image 
       source={require('./../assets/images/tsrtc.jpeg')} // Replace with your logo
        style={styles.tsrtcLogo}
      />
      <Text style={styles.tsrtcText}>TSRTC</Text>

      {/* Pay as You Go Section */}
      <View style={styles.paySection}>
        <Image 
          source={require('./../assets/images/parking.jpeg')} // Replace with your logo
          style={styles.parkingIcon}
        />
        <Text style={styles.payText}>PAY AS YOU GO!</Text>
      </View>

      {/* Powered by Section */}
      <View style={styles.poweredSection}>
        <Text style={styles.poweredText}>POWERED BY</Text>
        <Image 
         source={require('./../assets/images/airtel.png')} // Replace with your logo
          style={styles.bankLogo}
        />
        <Text style={styles.seamlessText}>SEAMLESS PARKING VIA</Text>
        <Image 
          source={require('./../assets/images/fastag.jpeg')} // Replace with your logo
          style={styles.fastagLogo}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  logo: {
    width: 150, // Adjust this according to the actual logo size
    height: 100, // Adjust this according to the actual logo size
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 20,
  },
  tsrtcLogo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  tsrtcText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  parkingIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  payText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  poweredSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  poweredText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bankLogo: {
    width: 100,
    height: 30,
    marginBottom: 10,
  },
  seamlessText: {
    fontSize: 16,
    marginBottom: 10,
  },
  fastagLogo: {
    width: 100,
    height: 30,
  },
});

export default ParkingUI;
