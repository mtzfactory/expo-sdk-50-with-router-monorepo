import { greeting } from "@monorepo/cool-package";
import * as React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export default function RootRoute() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Text>{greeting}</Text>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
