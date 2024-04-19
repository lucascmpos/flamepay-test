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
      } else if (path === "/finalstep") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.progress-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-right: 2%;
  border-right: 1px solid #d9d9d9;
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
}

.circle {
  background: #cfcfcf;
  width: 6px;
  height: 6px;
  border-radius: 100%;
}

.active {
  background: #ed7a7a;
}
</style>
