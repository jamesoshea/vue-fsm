<template>
  <div>
    <button @click="fetchData">
      FETCH DATA
    </button>
    <div>
      Current state: {{$store.state.state}}
    </div>
    <div>
      Items: {{$store.state.items}}
    </div>
    <div>
      Loading: {{$store.state.loading}}
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    fetchData() {
      this.$store.dispatch("FETCH_TRANSITION", {
        type: "FETCH_DATA_REQUEST",
        params: {
          query: "hey"
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
