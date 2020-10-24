<template>
  <div ref="card" class="card" @click="click" :class="state">
    <slot />
    <div class="bottom">
      {{ state }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      read: false
    };
  },
  computed: {
    state() {
      return this.read ? 'read' : 'unread';
    }
  },
  methods: {
    click() {
      this.read = !this.read;
    }
  }
}
</script>

<style scoped>
.card {
  padding: 2rem;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.28);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
}

.unread {
  background-color: rgba(255, 192,203, 1);
}

.read {
  background-color: rgba(0,0,255,0.5);
}

.bottom {
  font-size: 0.75rem;
  margin-bottom: -1rem;
  font-weight: 500;
  text-align: right;
  text-transform: uppercase;
}
</style>