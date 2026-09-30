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
        <Text style={styles.welcome}>Bienvenido Joshua Gonzalez</Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Información del estudiante</Text>
          <InfoRow label="Carnet" value="2022043" />
          <View style={styles.divider} />
          <InfoRow label="Sección y grupo" value="2B" />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Productos')}>
          <Text style={styles.buttonText}>Explorar productos</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f5f7fb',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  welcome: {
    color: '#1f2937',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  infoCard: { backgroundColor: '#ffffff', borderColor: '#e5e7eb', borderRadius: 16, borderWidth: 1, elevation: 2, marginTop: 24, paddingHorizontal: 18, shadowColor: '#1e3a5f', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8 },
  cardTitle: { color: '#1f2937', fontSize: 16, fontWeight: '700', marginTop: 18 },
  infoRow: { paddingVertical: 16 },
  label: { color: '#64748b', fontSize: 13, marginBottom: 4 },
  value: { color: '#1f2937', fontSize: 16, fontWeight: '600' },
  divider: { backgroundColor: '#e5e7eb', height: 1 },
  button: { alignItems: 'center', backgroundColor: '#2563eb', borderRadius: 12, elevation: 2, marginTop: 24, paddingVertical: 15, shadowColor: '#1d4ed8', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
});
