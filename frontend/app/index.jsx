import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Splash() {
  return (
    <View style={styles.container}>

      <View style={styles.logoBox}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>c</Text>
        </View>
        </View>

        <Text style={styles.appName}>ChatBit</Text>
       
       <Text style={styles.description}>
        Votre support, toujours à portée de main
        </Text>

        <TouchableOpacity
         style={styles.button}
        activeOpacity={0.8}
        onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.buttonText}>Commencer</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070D1d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  logoBox: {
    width: 90,
    height: 90,
    backgroundColor: "#18233A",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  logo: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  
  logoText: {
    color: "#1769FF",
    fontSize: 40,
    fontWeight: "900",
  },

  appName: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 8,
  },

  description: {
    color: "#8D99B5",
    fontSize: 15,
    textAlign: "center",
  },

  button: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    height: 50,
    backgroundColor: "#AFC7FF",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#07142F",
    fontSize: 13,
    fontWeight: "600",
  },

  arrow: {
    color: "#07142F",
    fontSize: 17,
    marginLeft: 6,
  },
});