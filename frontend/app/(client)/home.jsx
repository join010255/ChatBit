import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image
                            source={require("../../assets/images/chat.png")}
                            style={styles.logo}
                        />
                    </View>
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
                            router.push("/(client)/new-conversation")
                        }
                    >
                        <Ionicons
                            name="chatbox-outline"
                            size={18}
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

                        <Text style={styles.date}>
                            Il y a 10 min
                        </Text>
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

                        <Text style={styles.conversationTitle}>
                            Demande de remboursement
                        </Text>
                    </View>

                    <Text
                        style={styles.messagePreview}
                        numberOfLines={1}
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

                    <Text style={styles.conversationTitle}>
                        Question sur la garantie
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05051F",
    },

    content: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 30,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    logo: {
        width: 100,
        height: 90,
        alignSelf: "center",
        marginBottom: -40,
        resizeMode: "contain",
    },

    welcome: {
        marginBottom: 22,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "800",
        marginBottom: 4,
    },

    subtitle: {
        color: "#D5DBEA",
        fontSize: 12,
        lineHeight: 17,
    },

    helpCard: {
        backgroundColor: "#AFC2FF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
    },

    helpTitle: {
        color: "#071027",
        fontSize: 18,
        fontWeight: "800",
        marginBottom: 10,
    },

    helpText: {
        color: "#33456F",
        fontSize: 11,
        lineHeight: 17,
        marginBottom: 14,
    },

    newConversationButton: {
        height: 40,
        backgroundColor: "#071027",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    newConversationText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "600",
        marginLeft: 5,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "800",
    },

    conversationCard: {
        backgroundColor: "#14142D",
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#242642",
    },

    cardTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
    },

    statusWaiting: {
        backgroundColor: "#3A321C",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },

    statusWaitingText: {
        color: "#F5C84B",
        fontSize: 9,
        fontWeight: "700",
    },

    statusProgress: {
        backgroundColor: "#142B4A",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },

    statusProgressText: {
        color: "#5EA1FF",
        fontSize: 9,
        fontWeight: "700",
    },

    statusClosed: {
        backgroundColor: "#222938",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },

    statusClosedText: {
        color: "#8991A5",
        fontSize: 9,
        fontWeight: "700",
    },

    date: {
        color: "#8991A5",
        fontSize: 9,
        marginLeft: 8,
    },

    conversationTitle: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 3,
    },

    orderNumber: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "600",
        marginBottom: 6,
    },

    messagePreview: {
        color: "#7D86A0",
        fontSize: 10,
        lineHeight: 15,
    },

    agentRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    avatar: {
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: "#24314A",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 7,
    },

    avatarText: {
        fontSize: 13,
    },

    bottomNav: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#14142D",
        borderTopWidth: 1,
        borderTopColor: "#20203A",
    },

    navItem: {
        alignItems: "center",
        justifyContent: "center",
    },

    navText: {
        color: "#777F99",
        fontSize: 10,
        marginTop: 5,
    },
});