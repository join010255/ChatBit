import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { router } from "expo-router";
import { login } from "../../services/auth";
import { useAuthStore } from "../../store/authStore";
import { loginSchema } from "../../validations/loginSchema";

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const loginStore = useAuthStore((state) => state.login);
    const handleLogin = async () => {
  try {
    const data = await login(email, password);

    await loginStore(data.user, data.token);

    router.replace("/(client)/home");
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
    

    return (
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersist="handled"
            >
        <Image
         source={require("../../assets/images/unnamed-removebg-preview.png")}
         style={styles.logo}
        />

        <View style={styles.header}>
            <Text style={styles.title}>Bon retour</Text>

            <Text style={styles.subtitle}>
                Connectez-vous à votre compte
            </Text>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>

            <TextInput
            style={styles.input}
            placeholder="Votre adresse email"
            placeholderTextColor="#667085"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe</Text>

            <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            placeholderTextColor="#667085"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
         </View>
            <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
            >
            <Text style={styles.buttonText}>
            Se connecter
            </Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Pas encore de compte?
                </Text>

            <TouchableOpacity 
             onPress={() => router.push("/register")}
            >
            <Text style={styles.registerLink}>S`inscrire</Text>
            </TouchableOpacity>    
            </View>
        
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },

    content: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 40,
        backgroundColor: "#000000",
    },

    logo: {
        width: 400,
        height: 200,
        alignSelf: "center",
        marginBottom: -40,
        resizeMode: "contain",
    },

    header: {
        marginBottom: 30,
        alignSelf: "center",
    },

    title: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 8,
           alignItems : "center",
        justifyContent: "center",
    marginLeft:40,
    },

    subtitle: {
        color: "#8D99B5",
        fontSize: 15,
     
    },

    inputContainer: {
        marginBottom: 20,
    },

    label: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
    },

    input: {
        height: 54,
        backgroundColor: "#111111",
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 14,
        paddingHorizontal: 16,
        color: "#FFFFFF",
        fontSize: 15,
    },

    button: {
        height: 54,
        backgroundColor: "#1769FF",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },

    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 25,
    },

    registerText: {
        color: "#8D99B5",
        fontSize: 14,
    },

    registerLink: {
        color: "#1769FF",
        fontSize: 14,
        fontWeight: "700",
    },
});