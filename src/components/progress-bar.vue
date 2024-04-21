<script>
export default {
  name: "ProgressBar",
  methods: {
    isStepActive(step) {
      const { path } = this.$route;
      if (path === "/" && step === 1) {
        return true;
      } else if (
        (path === "/pix" || path === "/credit" || path === "/bankslip") &&
        (step === 1 || step === 2)
      ) {
        return true;
      } else if (path === "/final-step") {
        return true;
      }
      return false;
    },
  },
};
</script>

<template>
  <div class="progress-div">
    <p :class="{ 'progress-number': true, active: isStepActive(1) }">1</p>
    <div :class="{ circle: true, active: isStepActive(1) }" />
    <div :class="{ circle: true, active: isStepActive(1) }" />
    <div :class="{ circle: true, active: isStepActive(1) }" />
    <p :class="{ 'progress-number': true, active: isStepActive(2) }">2</p>
    <div :class="{ circle: true, active: isStepActive(2) }" />
    <div :class="{ circle: true, active: isStepActive(2) }" />
    <div :class="{ circle: true, active: isStepActive(2) }" />
    <p :class="{ 'progress-number': true, active: isStepActive(3) }">3</p>
  </div>
</template>

<style lang="scss">
.progress-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-right: 2%;
  border-right: 1px solid #d9d9d9;
  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 10%;
    border-right: none;
    border-top: 1px solid #d9d9d9;
  }
  @media (max-width: 490px) {
    width: 230px;
  }
}
.progress-number {
  display: flex;
  background: #cfcfcf;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  color: #ffff;
  font-size: 11px;
  font-weight: 700;
  @media (max-width: 1000px) {
    width: 80px;
    height: 20px;
  }
  @media (max-width: 490px) {
    height: 10px;
    padding: 4px;
  }
}

.circle {
  background: #cfcfcf;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  @media (max-width: 1000px) {
    width: 20px;
    height: 5px;
  }
  @media (max-width: 490px) {
    width: 20px;
    height: 1px;
    padding: 2px;
  }
}

.active {
  background: #ed7a7a;
}
</style>
