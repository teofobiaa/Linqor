import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const destinations = [
  { href: "/pair" as const, title: "Подключить устройство", description: "Создать запрос или отсканировать QR-код", primary: true },
  { href: "/favorites" as const, title: "Избранные беседы", description: "Быстрый доступ к сохранённым беседам" },
  { href: "/settings" as const, title: "Настройки", description: "Параметры приложения и безопасность" },
  { href: "/auth" as const, title: "Аккаунт", description: "Вход и регистрация" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>DEVICE BRIDGE</Text>
          <Text style={styles.title}>Linqor</Text>
          <Text style={styles.description}>Подключайте устройства и передавайте данные в рамках отдельной защищённой сессии.</Text>
        </View>
        <Text style={styles.sectionTitle}>Рабочее пространство</Text>
        <View style={styles.navigation}>
          {destinations.map((item) => (
            <Link key={item.href} href={item.href} style={[styles.card, item.primary && styles.primaryCard]}>
              <Text style={[styles.cardTitle, item.primary && styles.primaryTitle]}>{item.title}</Text>
              <Text style={[styles.cardDescription, item.primary && styles.primaryDescription]}>{item.description}</Text>
            </Link>
          ))}
        </View>
        <Text style={styles.note}>Начальный интерфейс. Авторизация, синхронизация и передача данных пока не подключены.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0b1220" },
  container: { flexGrow: 1, padding: 22, paddingTop: 30, paddingBottom: 36 },
  hero: { paddingVertical: 22, paddingHorizontal: 4 },
  eyebrow: { color: "#65c6e8", letterSpacing: 3, fontSize: 11, fontWeight: "800" },
  title: { color: "#ffffff", fontSize: 52, fontWeight: "800", letterSpacing: -2, marginTop: 12 },
  description: { color: "#aab8c8", fontSize: 16, lineHeight: 25, marginTop: 12, maxWidth: 520 },
  sectionTitle: { color: "#eaf2f8", fontSize: 17, fontWeight: "700", marginTop: 24, marginBottom: 12 },
  navigation: { gap: 10 },
  card: { backgroundColor: "#142235", borderWidth: 1, borderColor: "#ffffff18", borderRadius: 14, padding: 18, minHeight: 86, justifyContent: "center" },
  primaryCard: { backgroundColor: "#8bd7f0", borderColor: "#8bd7f0" },
  cardTitle: { color: "#edf5fb", fontSize: 15, fontWeight: "700" },
  primaryTitle: { color: "#10202b" },
  cardDescription: { color: "#91a4b8", fontSize: 13, lineHeight: 19, marginTop: 5 },
  primaryDescription: { color: "#294654" },
  note: { color: "#71849a", fontSize: 12, lineHeight: 19, marginTop: 26 },
});
