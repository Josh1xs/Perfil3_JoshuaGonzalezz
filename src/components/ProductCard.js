import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{product.description}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    overflow: 'hidden',
    padding: 12,
  },
  image: {
    height: 100,
    marginRight: 12,
    width: 82,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  title: {
    color: '#1f2937',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  description: {
    color: '#6b7280',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
  },
  price: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 8,
  },
});
