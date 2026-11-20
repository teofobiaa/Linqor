import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ title: "Страница не найдена" }} />
      <View style={styles.container}>
        <Text style={styles.eyebrow}>404 · PAGE NOT FOUND</Text>
        <Text style={styles.title}>Такой страницы нет</Text>
        <Text style={styles.message}>
          Проверьте адрес или вернитесь на главную страницу Linqor.
        </Text>
        <Link href="/" style={styles.link}>
          На главную
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0b1220" },
  container: { flex: 1, justifyContent: "center", padding: 28 },
  eyebrow: {
    color: "#70cde2",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },
  title: {
    marginTop: 14,
    color: "#f2f7fb",
    fontSize: 30,
    fontWeight: "800",
  },
  message: {
    marginTop: 12,
    color: "#9aabbd",
    fontSize: 14,
    lineHeight: 22,
  },
  link: {
    alignSelf: "flex-start",
    marginTop: 24,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 9,
    overflow: "hidden",
    backgroundColor: "#8bdced",
    color: "#0b1b29",
    fontSize: 13,
    fontWeight: "800",
  },
});
