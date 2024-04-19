<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DetailsView from "./views/details-view.vue";
import ProgressBar from "./components/progress-bar.vue";
</script>

<template>
  <main>
    <DetailsView />
    <section class="payment-section">
      <ProgressBar />
      <RouterView />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "./components/styles/variables.scss";

main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 490px) {
    width: 200px;
  }
}

.payment-section {
  display: flex;
  flex-direction: row;
  padding: 2%;
  align-items: center;
  justify-content: center;
  background: $payment-background;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 1000px) {
    flex-direction: column;
    order: 1;
    border-radius: 0px 0px 10px 10px;
  }
  @media (max-width: 490px) {
    width: 255px;
  }
}
</style>
