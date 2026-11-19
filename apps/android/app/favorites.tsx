import { StyleSheet, Text, View } from "react-native";
export default function FavoritesScreen() {
  return <View style={styles.container}><Text style={styles.title}>Избранные беседы</Text><Text style={styles.body}>Избранные беседы будут доступны после авторизации и подключения устройства. Синхронизация пока не подключена.</Text></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 24, backgroundColor: "#101827" }, title: { color: "#fff", fontSize: 28, fontWeight: "700" }, body: { color: "#aab8c8", marginTop: 14, lineHeight: 24 } });