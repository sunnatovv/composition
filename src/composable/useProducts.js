import { ref } from "vue";
import api from "@/api";

export function useProducts() {
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const limit = ref(8); // Set a default value greater than 0
  const skip = ref(0); // Initialize skip to 0
  const fetchProducts = () => {
    console.log("hasdfjadf");
    loading.value = true; // Set loading to true when fetching starts
    error.value = null; // Reset error before fetching

    api
      .get(`/products?limit=${limit.value}&skip=${skip.value}`)
      .then((res) => {
        products.value = [...products.value, ...res.data.products];
        skip.value += limit.value; // Update skip after fetching
        console.log("skip", skip.value);
        console.log("res data", res.data.products);
        console.log("limit", limit.value);
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false; // Ensure loading is set to false after fetch
      });
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
}
