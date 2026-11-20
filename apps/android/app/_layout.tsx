import { Stack, type ErrorBoundaryProps } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={styles.errorScreen}>
      <Text style={styles.eyebrow}>APPLICATION ERROR</Text>
      <Text style={styles.title}>Не удалось открыть экран</Text>
      <Text style={styles.message}>
        Произошла непредвиденная ошибка. Попробуйте загрузить экран ещё раз.
      </Text>
      <Pressable accessibilityRole="button" onPress={retry} style={styles.button}>
        <Text style={styles.buttonText}>Повторить</Text>
      </Pressable>
      {__DEV__ ? (
        <Text selectable style={styles.debugMessage}>{error.message}</Text>
      ) : null}
    </View>
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0d1726" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "700" },
          headerShadowVisible: false,
          headerBackTitle: "Назад",
          contentStyle: { backgroundColor: "#0b1220" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Linqor", headerLargeTitle: false }} />
        <Stack.Screen name="auth" options={{ title: "Аккаунт" }} />
        <Stack.Screen name="pair" options={{ title: "Подключение" }} />
        <Stack.Screen name="session/[id]" options={{ title: "Сессия" }} />
        <Stack.Screen name="settings" options={{ title: "Настройки" }} />
        <Stack.Screen name="favorites" options={{ title: "Избранное" }} />
        <Stack.Screen name="+not-found" options={{ title: "Страница не найдена" }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  errorScreen: { flex: 1, justifyContent: "center", padding: 28, backgroundColor: "#0b1220" },
  eyebrow: { color: "#70cde2", fontSize: 10, fontWeight: "800", letterSpacing: 2 },
  title: { marginTop: 14, color: "#f2f7fb", fontSize: 28, fontWeight: "800" },
  message: { marginTop: 12, color: "#9aabbd", fontSize: 14, lineHeight: 22 },
  button: { alignSelf: "flex-start", marginTop: 24, paddingHorizontal: 18, paddingVertical: 13, borderRadius: 9, backgroundColor: "#8bdced" },
  buttonText: { color: "#0b1b29", fontSize: 13, fontWeight: "800" },
  debugMessage: { marginTop: 24, color: "#d3a65e", fontSize: 11 },
});
