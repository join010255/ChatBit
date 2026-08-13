import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function Splash() {
  return (
    <View style={styles.container}>

      <Image
               source={require("../assets/images/unnamed.png")}
               style={styles.logo}
              />
      
      

        <Text style={styles.appName}>ChatBit</Text>
       
       <Text style={styles.description}>
        Votre support, toujours à portée de
         {"\n"}
         main
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


  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
 
  appName: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    color: "#8D99B5",
    fontSize: 20,
    textAlign: "center",
  },

  button: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    height: 65,
    backgroundColor: "#AFC7FF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },

  buttonText: {
    color: "#07142F",
    fontSize: 20,
    fontWeight: "600",
  },

  arrow: {
    color: "#07142F",
    fontSize: 15,
    marginLeft: 10,
  },
});