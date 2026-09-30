import { useCallback, useEffect, useState } from 'react';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(PRODUCTS_URL);

      if (!response.ok) {
        throw new Error();
      }

      setProducts(await response.json());
    } catch {
      setError('Revisa tu conexión e inténtalo nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const request = setTimeout(loadProducts, 0);

    return () => clearTimeout(request);
  }, [loadProducts]);

  return { products, isLoading, error, loadProducts };
}
