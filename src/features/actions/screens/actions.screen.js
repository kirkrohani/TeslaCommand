import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { QuickAction } from "../components/quickAction";
import React from "react";

export default function QuickActionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <QuickAction action={"Start Vehicle"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "green",
  },
});
