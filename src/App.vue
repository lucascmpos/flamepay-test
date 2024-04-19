<template>
  <main>
    <DetailsView />
    <section class="payment-section">
      <ProgressBar />
      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DetailsView from "./views/details-view.vue";
import ProgressBar from "./components/progress-bar.vue";
</script>

<style lang="scss" scoped>
@import "./components/styles/variables.scss";

main {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.payment-section {
  display: flex;
  flex-direction: row;
  padding: 2%;
  align-items: center;
  background: $payment-background;
  border-radius: 0px 10px 10px 0px;
}
</style>
