import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function LoadingState() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563eb" />
      <Text style={styles.text}>Cargando productos...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 56,
  },
  text: {
    color: '#64748b',
    fontSize: 15,
    marginTop: 14,
  },
});
