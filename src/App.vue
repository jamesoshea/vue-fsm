<template>
  <div class="container">
    <button class='pure-button' @click="fetchData">
      FETCH DATA
    </button>
    <div>
      Current state: {{state}}
    </div>
    <div>
      Items: {{items}}
    </div>
    <div>
      Loading: {{loading}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState({
      state: state => state.state,
      items: state => state.items,
      loading: state => state.loading
    })
  },
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
.container {
  width: 100%;
  text-align: center;
  padding: 1rem;
}
</style>
