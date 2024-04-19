import { ref, onMounted } from "vue";

export default function useProducts() {
  const products = ref([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      products.value = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(fetchProducts);

  return {
    products,
  };
}
