<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2 class="subtitle">カウンター</h2>
    <div>count:{{count}}</div>
    <button @click="inc">+1</button>
    <button @click="dec">-1</button>

    <h2 class="subtitle">Todo</h2>
    <div v-for="todo in todos" :key="todo.id">
      <div>ユーザー名:{{todo.user}}</div>
    </div>

    <!-- <div>count2:{{count2}}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["count", "todos"])
  },
  // computed: mapState({
  //   count: state => state.count,
  //   count2: state => state.count2
  // }),
  methods: {
    inc: function() {
      this.$store.dispatch("incActionCounter");
    },
    dec: function() {
      this.$store.dispatch("decActionCounter");
    }
  }
};
</script>
