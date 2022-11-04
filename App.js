import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <Text>Vehicle Data </Text>
        </View>
        <View style={styles.vehicleImageSection}>
          <Text>Vehicle Image </Text>
        </View>
        <View style={styles.vehicleStatsSection}>
          <Text>Vehicle Stats </Text>
        </View>
      </View>
      <View style={styles.importantMessagesSection}>
        <Text>Important Messages </Text>
      </View>
      <View style={styles.quickControlsSection}>
        <Text>Quick Controls </Text>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  topNavBar: {
    flex: .05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#0000FF',
    borderWidth: 3
  },
  menuSection: {
    backgroundColor: "#89CFF0",
    height: "100%",
    borderWidth: 1,
    flex: .5
  },
  userProfileSection: {
    backgroundColor: "#89CFF0",
    height: "100%",
    borderWidth: 1,
    flex: .5,
    alignItems: "flex-end"
  },
  topSection: {
    flex: .35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00FFFF",
    justifyContent: "space-evenly",
    borderWidth: 3
  },
  vehicleDataSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: .33
  },
  vehicleImageSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: .33
  },
  vehicleStatsSection: {
    borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: .33
  },
  importantMessagesSection: {
    flex: .05,
    borderWidth: 3,
    borderColor: "green"
  },
  quickControlsSection: {
    flex: .55,
    borderWidth: 3,
    borderColor: "yellow"
  }
});
