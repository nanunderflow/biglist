<template>
  <div>
    <div v-if="loading" class="loadingState">
      <span>Loading...</span>
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.loadingState {
  font-weight: 500;
  text-transform: uppercase;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>