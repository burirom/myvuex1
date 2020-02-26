<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2 class="subtitle">カウンター</h2>
    <div>count:{{count}}</div>
    <button @click="inc">+1</button>
    <button @click="dec">-1</button>
    <button @click="testinc">テストボタンです(押すとカウントが+1されます。)</button>

    <h2 class="subtitle">Todo</h2>
    <div v-for="todo in todos" :key="todo.id">
      <div>ユーザー名:{{todo.user}}</div>
    </div>
    <h2 class="subtitle">アクション</h2>

    <div>内容</div>
    <input type="text" v-model="updatetext" />
    <button @click="actionbtn">アクションボタン</button>
    <div>{{text}}</div>
    <!-- <div>count2:{{count2}}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data: function() {
    return {
      updatetext: ""
    };
  },
  components: {},
  computed: {
    ...mapState(["count", "text"]),
    ...mapGetters({ todos: "doneTodos" })
  },
  methods: {
    ...mapMutations(["incCommiTtest"]),
    inc: function() {
      this.$store.dispatch("incActionCounter");
    },
    dec: function() {
      this.$store.dispatch("decActionCounter");
    },
    testinc: function() {
      this.incCommiTtest();
    },
    actionbtn: function() {
      this.$store.dispatch("changeActionText", this.updatetext);
      this.updatetext = "";
    }
  }
};
</script>
