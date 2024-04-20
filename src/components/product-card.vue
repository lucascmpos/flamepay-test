<script setup>
import useProducts from "../composables/useProducts";

const { products } = useProducts();
</script>

<template>
  <section>
    <div v-for="product in products" :key="product.id" class="product-card">
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
      <h3 class="product-name">R$ {{ product.price }}</h3>
    </div>
  </section>
</template>

<style lang="scss">
@import "./styles/variables.scss";

.product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #d9d9d9;
  border-left: 4px solid #ed7a7a;
  padding: 1%;
  margin-bottom: 2%;
  width: 85%;
}

.product-info {
  display: flex;
  flex-direction: column;
  text-wrap: wrap;
  width: 70%;
}
.product-name {
  @each $property, $value in $card-primary-text {
    #{$property}: $value;
  }
  text-wrap: nowrap;
}
.product-description {
  @each $property, $value in $card-secondary-text {
    #{$property}: $value;
  }
}
</style>
