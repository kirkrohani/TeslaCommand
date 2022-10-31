import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.textStyle}>
      <Text>Tesla Command v2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
