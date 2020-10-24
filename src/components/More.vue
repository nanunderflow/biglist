<template>
  <div class="refreshBar">
    <button @click="click" :disabled="isLoading">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    this.isLoading = this.loading;
  },
  computed: {
    text() {
      return this.isLoading ? 'Loading...' : '+ Load More';
    }
  },
  methods: {
    click() {
      this.isLoading = true;
      this.$emit('click');
    }
  },
  watch: {
    loading(nextValue) {
      this.isLoading = nextValue;
    }
  }
}
</script>

<style scoped>
.refreshBar {
  padding: 1rem;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to bottom right, #111, #333);
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.28);
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 1rem;
  min-width: 200px;
  background-color: rgba(255,165,0, 1);
  opacity: default;
  border: 0;
  border-radius: 3px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}

button:focus {
  outline: 0;
}

button:active {
  background-color: rgba(255,165,0,0.55);
}

button:disabled {
  background-color: rgba(255,165,0,0.55);
  cursor: not-allowed;
}

</style>