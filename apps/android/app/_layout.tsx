import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return <><StatusBar style="light" /><Stack screenOptions={{ headerStyle: { backgroundColor: "#101827" }, headerTintColor: "#ffffff", contentStyle: { backgroundColor: "#101827" } }}><Stack.Screen name="index" options={{ title: "Linqor" }} /><Stack.Screen name="auth" options={{ title: "Аккаунт" }} /><Stack.Screen name="pair" options={{ title: "Подключение" }} /><Stack.Screen name="session/[id]" options={{ title: "Сессия" }} /><Stack.Screen name="settings" options={{ title: "Настройки" }} /></Stack></>;
}