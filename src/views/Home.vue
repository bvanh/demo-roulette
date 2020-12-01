<template>
  <div class="wrapper">
    <v-row>
      <v-col cols="6"
        ><Roulette :getUserWin="getUsersWin" />
        <img src="../assets/banner.png" alt="banner" class="banner" />
      </v-col>
      <v-col cols="6">
        <Result :listUsersWin="listUsersWin" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src

//import "swiper/css/swiper.css";
import Roulette from "../components/Roulette";
import Result from "../components/Result";
export default {
  name: "Home",
  data: () => ({
    listUsersWin: [],
  }),
  methods: {
    getUsersWin(user) {
      this.listUsersWin = [...this.listUsersWin, user];
    },
  },
  components: {
    Roulette,
    Result,
  },
};
</script>
<style lang="scss">
.wrapper {
  height: 100vh;
  position: relative;
  background: black url(../assets/bg.png) no-repeat center;
  overflow: hidden;
  .banner {
    width: 75%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
