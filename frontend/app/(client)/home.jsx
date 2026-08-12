import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
            >
         <View style={styles.header}>
            <View style={styles.headerLeft}>
             <Image
              source={require("../../assets/images/chat.png")}
              style={styles.logo}
             />

             <Text style={styles.appName}>ChatBit</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
                <Ionicons
                 name="search-outline"
                 size={25}
                 color="#AFC2FF"
                />
            </TouchableOpacity>
         </View>

         <View style={styles.welcome}>
            <Text style={styles.title}>
                Bonjour, Khadija
            </Text>

            <Text style={styles.subtitle}>
                Comment pouvons-nous vous aider
            </Text>

            <Text style={styles.subtitle}>
                aujourd'hui ?
            </Text>
         </View>

         <View style={styles.helpCard}>
            <Text style={styles.helpTitle}>
                Besoin d'aide ?
            </Text>

            <Text style={styles.helpText}>
                Notre équipe de support est là pour
                {"\n"}
                répondre à vos questions sur vos
                {"\n"}
                commandes Souq Express.
            </Text>

            <TouchableOpacity
             style={styles.newConversationButton}
             activeOpacity={0.8}
             onPress={() =>
                router.push("/(client)/new-convesrsation")
             }
            >
                <Ionicons
                 name="cahtbox"
                 size={12}
                 color="#FFFFFF"
                />

                <Text style={styles.newConversationText}>
                    Nouvelle conversation
                </Text>
            </TouchableOpacity>
         </View>

         <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                conversations récentes
            </Text>

            <TouchableOpacity
             onPress={() =>
                router.push("/(client)/conversations")
             }
            >
                <Text style={styles.seeAll}>
                    Voir tout
                </Text>
            </TouchableOpacity>
         </View>
        
         <TouchableOpacity
           style={styles.conversationCard}
           activeOpacity={0.8}
           onPress={() => router.push("/(client)/chat")}
         >
            <View style={styles.cardTop}>
                <View style={styles.statusWaiting}>
                    <Text style={styles.statusWaitingText}>
                        • En attente
                    </Text>
                </View>
                <Text style={styles.data}>Il y a 10 min</Text>
            </View>
            <Text style={styles.conversationTitle}>
                Problème de livraison commande
                </Text>
                <Text style={styles.orderNumber}>
                    #4928
                </Text>

                <Text 
                 style={styles.messagePreview}
                 numberOfLines={1}
                >
                    Je n'ai pas reçu le colis qui était censé arriv...
                </Text>
         </TouchableOpacity>
          <TouchableOpacity
           style={styles.conversationCard}
           activeOpacity={0.8}
           onPress={() => router.push("/(client)/chat")}
          >
            <View style={styles.cardTop}>
                <View style={styles.statusProgress}>
                    <Text style={styles.statusProgressText}>
                        • En cours
                    </Text>
                </View>

                <Text style={styles.date}>
                    Hier, 14:30
                </Text>
            </View>

            <View style={styles.agentRow}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                                         👩
                      </Text>
                </View>

                <Text style={styles.conversaytionTitle}>
                    Demande de remboursement
                    </Text>
            </View>

            <Text 
              style={styles.messagePreview}
              numberOflines={1}
            >
                L'agent Youssef est en train d'examiner votr...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.conversationCard}
            activeOpacity={0.8}
            onPress={() => router.push("/(client)/chat")}
          >

            <View style={styles.cardTop}>
                <View style={styles.statusClosed}>
                    <Text style={styles.statusClosedText}>
                        • Fermée
                    </Text>
                </View>

                <Text style={styles.date}>
                    12 Oct 2025
                </Text>
            </View>

            <></>
          </TouchableOpacity>
            </ScrollView>
        </View>
    )
}