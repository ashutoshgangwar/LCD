import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

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

      {/* Success Checkmark Section */}
      <View style={styles.successSection}>
        <Image
          source={require("./../assets/images/success.png")} // Replace with your success icon
          style={styles.successIcon}
          resizeMode="contain"
        />
      </View>

      {/* License Plate Number */}
      <Text style={styles.licensePlate}>UP32NH6666</Text>

      {/* Entry Time */}
      <Text style={styles.entryTime}>Entry: 2024-05-23 20:35:11</Text>

      {/* Visitor Entry Message */}
      <Text style={styles.successMessage}>VISITOR ENTRY SUCCESSFUL</Text>

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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: "80%",
    height: 80,
  },
  successSection: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    width: 150,
    height: 150,
  },
  licensePlate: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  entryTime: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    marginTop:10
  },
  successMessage: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginVertical: 20,
    marginTop:80
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
