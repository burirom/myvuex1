<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>count:{{count}}</div>
    <button @click="inc">+1</button>
    <button @click="dec">-1</button>
    <div>count2:{{count2}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  // computed: {

  //   count() {
  //     return this.$store.getters.getcount;
  //   }
  // },
  computed: mapState({
    count: state => state.count,
    count2: state => state.count2
  }),
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
