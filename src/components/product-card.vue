<template>
  <section>
    <div v-for="product in products" :key="product.id" class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <h3>{{ product.price }}</h3>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    products.value = await response.json();
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss">
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
