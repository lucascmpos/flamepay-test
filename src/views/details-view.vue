<template>
  <section class="details-section">
    <h1 class="title">Detalhes da compra</h1>
    <div>
      <h2>Produtos: R$ 200,00</h2>
      <h2>Total: R$ 850,00</h2>
    </div>
    <ProductCard :products="products" />
  </section>
</template>

<script setup>
const name = "DetailsView";
import { ref } from "vue";

const products = ref([]);
import ProductCard from "../components/product-card.vue";
</script>

<style lang="scss">
@import "../components/styles/variables.scss";

.details-section {
  display: flex;
  flex-direction: column;
  background: $details-background;
  width: 312px;
  height: fit-content;
  padding: 10%;
  gap: 10%;
  border-radius: 0px, 10px;
}
.title {
  @each $property, $value in $title-text {
    #{$property}: $value;
  }
  margin-bottom: 10%;
}
</style>
