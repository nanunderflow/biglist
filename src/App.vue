<template>
  <div id="app">
    <loading-state :loading="loading">
      <template #default>
        <more @click="more" :loading="loadingNewer" />
        <ul>
          <li v-for="item in items" :key="item">
            <card>
              {{ item }}
            </card>
          </li>
        </ul>
      </template>
    </loading-state>
  </div>
</template>

<script>
import _ from 'lodash';
import Card from './components/Card';
import LoadingState from './components/LoadingState';
import More from './components/More';

import api from './api';

export default {
  name: 'App',
  components: {
    Card,
    LoadingState,
    More,
  },
  data() {
    return {
      items: [],
      loading: true,
      loadingNewer: false
    }
  },
  async mounted() {
    this.items = await api.getInitial();
    this.loading = false;
  },
  methods: {
    async more() {
      const head = Number(_.head(this.items));
      this.loadingNewer = true;
      const newItems = await api.getNewer(head);
      this.loadingNewer = false;
      this.items = _.slice([...newItems, ...this.items], 0, 20);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 18px;
  width: 90%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

body, ul {
  margin: 0;
  padding: 0;
  background: #e0e0e0;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

li {
  padding-bottom: 1rem;
  width: 100%;
}
</style>
