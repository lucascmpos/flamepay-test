<template>
  <section class="details-section">
    <h1 class="title">Detalhes da compra</h1>

    <div class="details-info">
      <div class="prices">
        <h2 class="products-price">
          Produtos: <span>{{ totalPrice }}</span>
        </h2>
        <h2 class="shipping">Frete: <span>R$ 25.00</span></h2>
      </div>
      <h2 class="total">
        Total: <span>{{ totalWithShipping }}</span>
      </h2>
      <div class="products-list">
        <ProductCard :products="products" />
      </div>
    </div>
  </section>
</template>

<script setup>
const name = "DetailsView";
import { computed } from "vue";
import ProductCard from "../components/product-card.vue";
import useProducts from "../composables/useGetProducts";

const { products } = useProducts();
const totalProductsPrice = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0);
});
const totalPrice = computed(() => {
  return `R$ ${totalProductsPrice.value.toFixed(2)}`;
});

const totalWithShipping = computed(() => {
  return `R$ ${(totalProductsPrice.value + 25).toFixed(2)}`;
});
</script>

<style lang="scss">
@import "../components/styles/variables.scss";

.details-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $details-background;
  width: 455px;
  height: 455px;
  gap: 10%;
  padding: 3%;
  border-radius: 10px 0px 0px 10px;
}

.details-info {
  width: 100%;
}
.prices {
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
}
.title {
  @each $property, $value in $title-text {
    #{$property}: $value;
  }
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
.total {
  @each $property, $value in $primary-text {
    #{$property}: $value;
  }
  padding-top: 1%;
  border-top: 1px solid #d9d9d9;
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

.products-list {
  width: 100%;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 10%;
}
</style>
