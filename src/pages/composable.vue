<template>
  <div class="container mx-auto p-4">
    <div v-if="error" class="text-red-500">{{ error.message }}</div>
    <div v-if="loading" class="text-blue-500">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-4 gap-5">
        <div
          v-for="product in products"
          :key="product.id"
          class=" p-4 rounded shadow mb-4 bg-slate-200"
        >
          <!-- Display product details here -->
          <img :src="product.thumbnail" alt="" />
          <h2>{{product.title}}</h2>
          <!-- Add other product details as needed -->
        </div>
      </div>

      <div class="flex justify-center">
        <button
          @click="fetchProducts"
          class="bg-slate-600 text-white py-2 px-6 rounded hover:bg-blue-600"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProducts } from "../composable/useProducts";

const { products, loading, error, fetchProducts } = useProducts();

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped></style>
