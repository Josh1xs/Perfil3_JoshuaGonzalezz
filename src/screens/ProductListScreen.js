import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoadingState from '../components/LoadingState';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

export default function ProductListScreen() {
  const { products, isLoading, error, loadProducts } = useProducts();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.errorTitle}>No se pudieron cargar los productos</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryButton} onPress={loadProducts}>
          <Text style={styles.retryText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.heading}>Catálogo</Text>
            <Text style={styles.subheading}>Productos disponibles desde Fake Store API</Text>
          </View>
        }
        refreshing={isLoading}
        onRefresh={loadProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  list: { padding: 16 },
  header: { marginBottom: 18 },
  heading: { color: '#1f2937', fontSize: 24, fontWeight: '800' },
  subheading: { color: '#64748b', fontSize: 14, marginTop: 5 },
  messageContainer: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 28 },
  errorTitle: { color: '#1f2937', fontSize: 18, fontWeight: '700', textAlign: 'center' },
  errorText: { color: '#64748b', fontSize: 15, marginTop: 8, textAlign: 'center' },
  retryButton: { backgroundColor: '#2563eb', borderRadius: 10, marginTop: 22, paddingHorizontal: 24, paddingVertical: 12 },
  retryText: { color: '#ffffff', fontSize: 15, fontWeight: '700' },
});
