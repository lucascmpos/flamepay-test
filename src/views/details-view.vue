<script setup>
const name = "DetailsView";

import { computed } from "vue";

import ProductCard from "../components/product-card.vue";
import useProducts from "../composables/useProducts";

const { products } = useProducts();

const productsPrice = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0);
});

const additionalPrice = 100;

const totalPrice = computed(() => {
  return productsPrice.value + additionalPrice;
});
</script>

<template>
  <section>
    <h1 class="title">Detalhes da compra</h1>

    <div class="details-info">
      <div class="prices">
        <h2 class="products-price">
          Produtos: <span>R$ {{ productsPrice }}</span>
        </h2>
        <h2 class="shipping">
          Adicionais: <span>R$ {{ additionalPrice }}</span>
        </h2>
      </div>
      <h2 class="total">
        Total: <span>R$ {{ totalPrice }}</span>
      </h2>
      <div class="products-list">
        <ProductCard :products="products" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../components/styles/variables.scss";

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $details-background;
  width: 455px;
  height: 455px;
  padding: 3%;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 1000px) {
    border-radius: 10px 10px 0px 0px;
  }

  @media (max-width: 490px) {
    width: 250px;
  }
}

.title {
  @each $property, $value in $title-text {
    #{$property}: $value;
  }
}
.details-info {
  width: 100%;
}
.prices {
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
}

.products-price {
  @each $property, $value in $primary-text {
    #{$property}: $value;
  }
  border-top: 1px solid #d9d9d9;
  padding-top: 1%;
  display: flex;
  justify-content: space-between;
}

.shipping {
  @each $property, $value in $primary-text {
    #{$property}: $value;
  }
  display: flex;
  margin-bottom: 5%;
  justify-content: space-between;
}

span {
  font-weight: 600;
}

.total {
  @each $property, $value in $primary-text {
    #{$property}: $value;
  }
  padding-top: 1%;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
}

.products-list {
  width: 100%;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 10%;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ed7a7a;
    border-radius: 20px;
  }
  @supports (-moz-appearance: none) {
    scrollbar-color: #ed7a7a #d9d9d9;
  }
}
</style>
