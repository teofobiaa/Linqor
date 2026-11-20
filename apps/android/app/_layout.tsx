import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
      </Stack>
    </>
  );
}
