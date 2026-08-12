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

export default function Register() {
    const [fullName,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        router.replace("/(client)/home");
    };

    return (
     <View style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        >

    <View style={styles.logoContainer}>
        <Image
         source={require("../../assets/images/chat.png")}
         style={styles.logo}
        />
    </View>

    <View style={styles.header}>
        <Text style={styles.title}>Crée un compte </Text>

        <Text style={styles.subtitle}>
            Rejoignez-nous pour optimiser votre
        </Text>

        <Text style={styles.subtitle}>Support client .</Text>
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom complet</Text>

        <TextInput 
         style={styles.input}
         placeholder="Jean Dupont"
         placeholderTextColor="#4D5A78"
         value={fullName}
         onChangeText={setFullName}
         autoCapitalize="words"
        />
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>

        <TextInput
        style={styles.input}
        placeholder="jean@souqexpress.ma"
        placeholderTextColor="#4D5A78"
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
           placeholder="••••••••"
           placeholderTextColor="#4D5A78"
           value={password}
           onChangeText={setPassword}
           secureTextEntry    
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>
                Confirmer le mot de passe
            </Text>

            <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#4D5A78"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            />
        </View>

        <TouchableOpacity 
         style={styles.button}
         onPress={handleRegister}
         activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>
                Créer mon compte
            </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
                Vous avez déja un compte ?
            </Text>

        <TouchableOpacity
          onPress={() => router.push("/(auth)/login")}
        >
        <Text style={styles.loginLink}>
            Se connecter
        </Text>
        </TouchableOpacity>    
        </View>
        </ScrollView>
     </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#070D1D"
    },

    content: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 30,
        backgroundColor: "#070D1D",
    },

    logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
         width: 400,
        height: 200,
        alignSelf: "center",
        marginBottom: -40,
        resizeMode: "contain",
    },

    header: {
        alignItems: "center",
        marginBottom: 25,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "700",
        marginBottom: 8,
    },

    subtitle: {
        color: "#D5DBEA",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 20,
    },

    inputContainer: {
        marginBottom: 16,
    },

    label: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "600",
        marginBottom: 6,
    },

    input: {
        height: 48,
        backgroundColor: "#070D1D",
        borderWidth: 1,
        borderColor: "#34405A",
        borderRadius: 7,
        paddingHorizontal: 14,
        color: "#FFFFFF",
        fontSize: 14,
    },

    button: {
        height: 48,
        backgroundColor: "#AFC2FF",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
    },

    buttonText: {
        color: "#071027",
        fontSize: 14,
        fontWeight: "700",
    },

    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 38,
    },

    loginText: {
        color: "#D5DBEA",
        fontSize: 13,
    },

    loginLink: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 5,
    },
});