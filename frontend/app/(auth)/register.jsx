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
         source={require("../frontend/assets/images/chat.png")}
        />
    </View>

    <View style={styles.header}>
        <Text style={styles.titles}>Crée un compte </Text>

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
            <Text ></Text>
        </View>
        </ScrollView>
     </View>
    )

}