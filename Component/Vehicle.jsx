import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { Colors } from "@/constants/Colors";

const ParkingUI = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("./../assets/images/logo.png")} // Replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcomes you to</Text>

      {/* TSRTC Section */}
      <Image
        source={require("./../assets/images/tsrtc.jpeg")} // Replace with your TSRTC logo
        style={styles.tsrtcLogo}
        resizeMode="contain"
      />
      <Text style={styles.tsrtcText}>TSRTC</Text>

      {/* Pay as You Go Section */}
      <View style={styles.paySection}>
        <Text style={styles.payText}>Reading Tag....</Text>
      </View>
      

      {/* Powered by and Seamless Parking Section */}
      <View style={styles.poweredSection}>
        <Text style={styles.poweredText}>POWERED BY</Text>
        <Text style={styles.seamlessText}>SEAMLESS PARKING VIA</Text>
      </View>
      <View style={styles.logoRow}>
        <Image
          source={require("./../assets/images/airtel.png")} // Replace with your bank logo
          style={styles.bankLogo}
          resizeMode="contain"
        />
        <Image
          source={require("./../assets/images/fastag.jpeg")} // Replace with your FASTag logo
          style={styles.fastagLogo}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    width: "100%", // Full width
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: "100%", // Full width logo
    height: 100,
    objectFit: "contain",
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 20,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
    width: "100%", // Full width text
  },
  tsrtcLogo: {
    width: "100%", // Full width image
    height: 200,
    marginVertical: 20,
  },
  tsrtcText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: "100%", // Full width text
  },
  paySection: {
    marginVertical: 10,
    marginTop:40,
    
  },
  payText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.GREEN
  },
  poweredSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 0,
    width: "100%",
  },
  poweredText: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 50,
    textAlign: "center",
  },
  seamlessText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    width: "100%",
  },
  bankLogo: {
    width: 100, // Adjust the size as needed
    height: 50,
    marginRight: 120,
  },
  fastagLogo: {
    width: 100, // Adjust the size as needed
    height: 50,
  },
});

export default ParkingUI;
