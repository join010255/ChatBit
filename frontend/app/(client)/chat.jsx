import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Chat() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;

    console.log("Message:", message);

    setMessage("");
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View style={styles.agentInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👩</Text>
          </View>

          <View>
            <Text style={styles.agentName}>Sara</Text>

            <Text style={styles.online}>
              ● En ligne
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.messages}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.date}>
          Aujourd'hui
        </Text>

        {/* Message client */}
        <View style={styles.clientMessageContainer}>
          <View style={styles.clientMessage}>
            <Text style={styles.clientText}>
              Bonjour Sara, j'ai passé une commande
              (Réf: SQ-8472) hier mais je n'ai pas
              reçu l'e-mail de confirmation.
              Est-ce normal ?
            </Text>

            <Text style={styles.time}>
              10:14 ✓✓
            </Text>
          </View>
        </View>

        {/* Message agent */}
        <View style={styles.agentMessageContainer}>
          <View style={styles.agentMessage}>
            <Text style={styles.agentText}>
              Bonjour ! Bienvenue chez Souq Express.
              Je suis désolée pour ce désagrément.
              Je vérifie immédiatement le statut de
              votre commande SQ-8472.
            </Text>

            <Text style={styles.agentTime}>
              10:16
            </Text>
          </View>
        </View>

        {/* Message agent */}
        <View style={styles.agentMessageContainer}>
          <View style={styles.agentMessage}>
            <Text style={styles.agentText}>
              Je vois que votre commande a bien été
              validée et est actuellement "En cours"
              de préparation. L'e-mail a pu se glisser
              dans vos spams.
            </Text>

            <Text style={styles.agentTime}>
              10:18
            </Text>
          </View>
        </View>

        {/* Message client */}
        <View style={styles.clientMessageContainer}>
          <View style={styles.clientMessage}>
            <Text style={styles.clientText}>
              Ah oui, je le vois dans mes spams !
              Merci beaucoup. Une idée du délai
              de livraison sur Casablanca ?
            </Text>

            <Text style={styles.time}>
              10:20 ✓✓
            </Text>
          </View>
        </View>

      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>

        <TouchableOpacity>
          <Ionicons
            name="attach-outline"
            size={25}
            color="#AFC2FF"
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Écrivez votre message..."
          placeholderTextColor="#7D86A0"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Ionicons
            name="send"
            size={19}
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
    backgroundColor: "#05051F",
  },

  /* HEADER */

  header: {
    height: 75,
    backgroundColor: "#10152B",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#242642",
  },

  agentInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 15,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#24314A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  avatarText: {
    fontSize: 20,
  },

  agentName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  online: {
    color: "#42D77D",
    fontSize: 11,
    marginTop: 2,
  },

  /* MESSAGES */

  messages: {
    flex: 1,
  },

  messagesContent: {
    padding: 16,
    paddingBottom: 20,
  },

  date: {
    color: "#A0A7BA",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 20,
  },

  clientMessageContainer: {
    alignItems: "flex-end",
    marginBottom: 12,
  },

  clientMessage: {
    backgroundColor: "#2864E8",
    maxWidth: "82%",
    padding: 12,
    borderRadius: 15,
    borderBottomRightRadius: 4,
  },

  clientText: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },

  time: {
    color: "#C9D7FF",
    fontSize: 9,
    textAlign: "right",
    marginTop: 5,
  },

  agentMessageContainer: {
    alignItems: "flex-start",
    marginBottom: 12,
  },

  agentMessage: {
    backgroundColor: "#171C32",
    maxWidth: "82%",
    padding: 12,
    borderRadius: 15,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: "#303650",
  },

  agentText: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },

  agentTime: {
    color: "#8991A5",
    fontSize: 9,
    textAlign: "right",
    marginTop: 5,
  },

  /* INPUT */

  inputContainer: {
    minHeight: 65,
    backgroundColor: "#10152B",
    borderTopWidth: 1,
    borderTopColor: "#242642",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    height: 45,
    backgroundColor: "#171C32",
    borderWidth: 1,
    borderColor: "#454C66",
    borderRadius: 23,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    fontSize: 14,
    marginHorizontal: 8,
  },

  sendButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#2864E8",
    justifyContent: "center",
    alignItems: "center",
  },
});