import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
}
const ThemedPressable = ({ children, ...props }: Props) => {
  return (
    <Pressable style={styles.btn} {...props}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default ThemedPressable;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
