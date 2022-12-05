import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import QuickActionsScreen from "./src/features/actions/screens/actions.screen";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.topNavBar}>
          <View style={styles.menuSection}>
            <Text>Menu Section</Text>
          </View>
          <View style={styles.userProfileSection}>
            <Text>User Profile Section</Text>
          </View>
        </View>
        <View style={styles.topSection}>
          <View style={styles.vehicleDataSection}>
            <Text>Vehicle Data</Text>
          </View>
          <View style={styles.vehicleImageSection}>
            <Text>Vehicle Image</Text>
          </View>
          <View style={styles.vehicleStatsSection}>
            <Text>Instant Buttons</Text>
          </View>
        </View>
        <View style={styles.importantMessagesSection}>
          <Text>Important Messages</Text>
        </View>
        <QuickActionsScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight,
  },
  topNavBar: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0000FF",
    borderWidth: 3,
  },
  menuSection: {
    backgroundColor: "#89CFF0",
    height: "100%",
    borderWidth: 1,
    flex: 0.5,
  },
  userProfileSection: {
    backgroundColor: "#89CFF0",
    height: "100%",
    borderWidth: 1,
    flex: 0.5,
    alignItems: "flex-end",
  },
  topSection: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00FFFF",
    justifyContent: "space-evenly",
    borderWidth: 3,
  },
  vehicleDataSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.33,
  },
  vehicleImageSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.33,
  },
  vehicleStatsSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.33,
  },
  importantMessagesSection: {
    flex: 0.05,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#097969",
  },
  quickControlsSection: {
    flex: 0.55,
    borderWidth: 3,
    borderColor: "yellow",
    backgroundColor: "#C1E1C1",
  },
});
