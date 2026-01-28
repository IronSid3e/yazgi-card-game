import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

export default function App() {
  const [stats, setStats] = useState({
    budun: 50,
    ordu: 50,
    erzak: 50,
    inanc: 50,
  });
  const [cardIndex, setCardIndex] = useState(0);
  const CARDS = [
    {
      id: 1,
      character: "Bilge Hatun",
      text: "Kağanım, komşu oba bize elçi gönderdi. İttifak istiyorlar, şölen verelim mi?",
      left: { text: "Gerek yok", impact: { erzak: 5, budun: -10 } },
      right: { text: "Toy kurulsun!", impact: { erzak: -20, budun: 20 } },
    },
    {
      id: 2,
      character: "Kam Ata",
      text: "Yüce Hakanım Umay Ana kurban ister verelim mi?",
      left: {
        text: "Ne kurbanı bre putperest!",
        impact: { inanc: -10, budun: 10 },
      },
      right: {
        text: "Toy kurulsun! Kurban veriyoruz",
        impact: { budun: -20, inanc: 20 },
      },
    },
  ];
  const handleChoice = (direction) => {
    const currentCard = CARDS[cardIndex];
    const choice = direction === "left" ? currentCard.left : currentCard.right;

    const newStats = {
      budun: Math.min(
        100,
        Math.max(0, stats.budun + (choice.impact.budun || 0)),
      ),
      ordu: Math.min(100, Math.max(0, stats.ordu + (choice.impact.ordu || 0))),
      erzak: Math.min(
        100,
        Math.max(0, stats.erzak + (choice.impact.erzak || 0)),
      ),
      inanc: Math.min(
        100,
        Math.max(0, stats.inanc + (choice.impact.inanc || 0)),
      ),
    };
    setStats(newStats);
    if (newStats.budun <= 0 || newStats.erzak <= 0 || newStats.inanc <= 0) {
      Alert.alert("Oba dağıldı!", "Kağanlığın sona erdi...");
      setStats({ budun: 50, ordu: 50, erzak: 50, inanc: 50 });
      setCardIndex(0);
    } else {
      setCardIndex((cardIndex + 1) % CARDS.length);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text> Budun {stats.budun} </Text>
        <Text> Ordu {stats.ordu}</Text>
        <Text> Erzak {stats.erzak}</Text>
        <Text> İnanç {stats.inanc}</Text>
      </View>
      <View style={{ backgroundColor: "red", height: 300, width: 300 }}>
        <Text>{CARDS[cardIndex].character}</Text>
        <Text>{CARDS[cardIndex].text}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 200,
        }}
      >
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}
          onPress={() => handleChoice("left")}
        >
          <Text>{CARDS[cardIndex].left.text} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}
          onPress={() => handleChoice("right")}
        >
          <Text style={{ textAlign: "center" }}>
            {CARDS[cardIndex].right.text}{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
