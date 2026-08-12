import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NewConversation() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleStart = () => {
    if (subject === "" || description === "") {
      return;
    }

    router.push("/(client)/chat");
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Nouvelle conversation
        </Text>
      </View>

      {/* Form */}
      <View style={styles.card}>

        {/* Objet */}
        <Text style={styles.label}>Objet</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex. Problème de livraison"
          placeholderTextColor="#667085"
          value={subject}
          onChangeText={setSubject}
        />

        {/* Description */}
        <Text style={styles.label}>
          Description du problème
        </Text>

        <TextInput
          style={styles.description}
          placeholder="Veuillez décrire votre problème..."
          placeholderTextColor="#667085"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Attachment */}
        <TouchableOpacity style={styles.attachment}>
          <Ionicons
            name="attach-outline"
            size={20}
            color="#35C6FF"
          />

          <Text style={styles.attachmentText}>
            Ajouter une pièce jointe
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>
            Démarrer la conversation
          </Text>

          <Ionicons
            name="send-outline"
            size={18}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070D1D",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 15,
  },

  card: {
    backgroundColor: "#18233A",
    padding: 20,
    borderRadius: 12,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#3A465F",
    borderRadius: 7,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    marginBottom: 20,
  },

  description: {
    height: 130,
    borderWidth: 1,
    borderColor: "#3A465F",
    borderRadius: 7,
    padding: 12,
    color: "#FFFFFF",
    textAlignVertical: "top",
    marginBottom: 15,
  },

  attachment: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  attachmentText: {
    color: "#35C6FF",
    marginLeft: 6,
  },

  button: {
    height: 50,
    backgroundColor: "#1769FF",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    marginRight: 8,
  },
});