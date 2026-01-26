import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [stats, setStats] = useState({
    budun: 50,
    ordu: 50,
    erzak: 50,
    inanc: 50,
  });
  const [carIndex, setCardIndex] = useState(0);
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
  return (
    <View style={styles.container}>
      <Text>Obamıza Hoş Geldiniz Kağanım! </Text>
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
