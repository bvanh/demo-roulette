<template>
  <div class="wrapper">
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
          <div class="button_area">
            <!-- <a class="spin_stop" href="javascript:void(0)" @click="stop()"
              >STOP</a
            > -->
            <a class="spin_stop" href="javascript:void(0)" @click="start"
              >START</a
            >
          </div>
          result is {{ userWin }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

//import "swiper/css/swiper.css";
import { getListLogin } from "../api/baseApi";
export default {
  name: "Home",
  data: () => ({
    isActive: "active",
    isRun: "stop",
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
<style lang='scss'>
@charset "UTF-8";

.roulette_wrap {
  margin: 100px;
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
  border: 1px solid #000;
  overflow: hidden;
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
  font-weight: bold;
}

.roulette_wrap .start_area {
  display: inline-block;
}
</style>
