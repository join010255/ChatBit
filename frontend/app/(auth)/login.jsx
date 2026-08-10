import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-router";
import { router } from "expo-router";

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        router.replace("/(client)/home");
    };

    return (
        <View style={StyleSheet.container}>
            <ScrollView
            contentContainerStyle={StyleSheet.c}
            ></ScrollView>
            </>
    )
}