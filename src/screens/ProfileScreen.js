import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JG</Text>
        </View>

        <Text style={styles.greeting}>Bienvenido</Text>
        <Text style={styles.name}>Joshua González</Text>

        <View style={styles.infoCard}>
          <InfoRow label="Carnet" value="Pendiente de agregar" />
          <View style={styles.divider} />
          <InfoRow label="Sección y grupo" value="Pendiente de agregar" />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Productos')}>
          <Text style={styles.buttonText}>Ver catálogo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 24 },
  avatar: { alignItems: 'center', backgroundColor: '#dbeafe', borderRadius: 48, height: 96, justifyContent: 'center', width: 96 },
  avatarText: { color: '#1d4ed8', fontSize: 30, fontWeight: '800' },
  greeting: { color: '#64748b', fontSize: 16, marginTop: 22 },
  name: { color: '#1f2937', fontSize: 28, fontWeight: '800', marginTop: 4 },
  infoCard: { backgroundColor: '#ffffff', borderColor: '#e5e7eb', borderRadius: 14, borderWidth: 1, marginTop: 32, paddingHorizontal: 18, width: '100%' },
  infoRow: { paddingVertical: 16 },
  label: { color: '#64748b', fontSize: 13, marginBottom: 4 },
  value: { color: '#1f2937', fontSize: 16, fontWeight: '600' },
  divider: { backgroundColor: '#e5e7eb', height: 1 },
  button: { alignItems: 'center', backgroundColor: '#2563eb', borderRadius: 10, marginTop: 24, paddingVertical: 15, width: '100%' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
});
