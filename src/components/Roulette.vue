<template>
  <div class="roulette_wrap">
    <div class="inner">
      <div :class="`spin_item ${isActive}`">
        <div id="Spin1" class="spin_area">
          <div
            :class="`spin_area_inner ${isRun}`"
            ref="busstop"
            v-bind:style="{
              transform: `translateY(${transformToPoint}px) !important`,
            }"
          >
            <span v-for="item in items" :key="item.userid">{{
              item.userid
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="button_area">
          <a class="spin_stop" href="javascript:void(0)" @click="start"
            >START</a
          >
        </div> -->
  </div>
</template>
<script>
// @ is an alias to /src
//import "swiper/css/swiper.css";
import { getListLogin } from "../api/baseApi";
export default {
  name: "Roulette",
  data: () => ({
    isActive: "active",
    isRun: "default",
    transformToPoint: "",
    positionStop: 0,
    userWin: "",
    times: 0,
    items: [],
  }),
  methods: {
    endBack(data) {
      const [info] = data;
      alert(info.prize);
    },
    stop() {
      this.isRun = "stop";
      // const positionTop = this.$refs.busstop.getBoundingClientRect().top;
      // const point = Math.round(positionTop / 50) * -1;
      // const setTop = -50;
      this.transformToPoint = this.positionStop.position;
      setTimeout(() => {
        this.userWin = this.positionStop.userid;
      }, 4000);
    },
    async start() {
      await getListLogin(this, this.times);
      this.isRun = "";
      this.times += 1;
      setTimeout(this.stop, 3000);
    },
  },
  created() {
    getListLogin(this, this.times);
  },
  components: {},
};
</script>
<style  lang='scss'>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.roulette_wrap {
  // margin: 100px;
  background: transparent url(../assets/bg_roulette.png) no-repeat center;
  height: 30rem;
  background-size: contain;
  text-align: center;
}

.roulette_wrap .inner {
  display: inline-block;
}

.roulette_wrap .spin_item {
  display: inline-block;
  margin: auto 10px;
}

.roulette_wrap .spin_area {
  position: relative;
  width: 200px;
  height: 250px;
  overflow: hidden;
  top: 9rem;
}

.roulette_wrap .spin_area .spin_area_inner {
  position: absolute;
  top: 0;
  left: 13.5%;
  animation-name: spin1_active;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-iteration-count: infinite;
}
.roulette_wrap .spin_area .spin_area_inner.stop {
  top: 1500px;
  transition-duration: 4s !important;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation: none;
  animation-duration: 4s;
}
.roulette_wrap .spin_area .spin_area_inner.default {
  top: -1500px;
  transition-duration: 4s !important;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation: none;
  animation-duration: 4s;
}
@keyframes spin1_active {
  0% {
    transform: translateY(-4700px);
  }
  100% {
    transform: translateY(0px);
  }
}

.roulette_wrap .spin_area .spin_area_inner > span {
  display: block;
  width: 150px;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  font-family: "Roboto";
  color: rgb(255, 245, 245);
  //line-height: 0.762;
  text-align: center;
  text-shadow: 0px 4px 2px rgba(128, 6, 0, 0.7);
  -moz-transform: scale(1, 0.8);
  -webkit-transform: scale(1, 0.8);
  -ms-transform: scale(1, 0.8);
}

.roulette_wrap .start_area {
  display: inline-block;
}
</style>
