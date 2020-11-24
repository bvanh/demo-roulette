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
              <span v-for="item in 70" :key="item">{{ item }}</span>
            </div>
          </div>
          <div class="button_area">
            <a class="spin_stop" href="javascript:void(0)" @click="stop()"
              >STOP</a
            >
            <a class="spin_stop" href="javascript:void(0)" @click="start"
              >START</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

//import "swiper/css/swiper.css";
export default {
  name: "Home",
  data: () => ({
    isActive: "active",
    isRun: "",
    transformToPoint: "",
  }),
  methods: {
    endBack(data) {
      const [info] = data;
      alert(info.prize);
    },
    stop() {
      this.isRun = "stop";
      const positionTop = this.$refs.busstop.getBoundingClientRect().top;
      const point = Math.round(positionTop / 50) * -1;
      const setTop = -1050;
      this.transformToPoint = setTop;
      console.log(setTop, point, `${-2100 + setTop}`);
    },
    start() {
      this.isRun = "";
    },
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
  width: 100px;
  height: 250px;
  border: 1px solid #000;
  overflow: hidden;
}

.roulette_wrap .spin_area .spin_area_inner {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: spin1_active;
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-iteration-count: infinite;
}
.roulette_wrap .spin_area .spin_area_inner.stop {
  top: -2000px;
  transition-duration: 6s !important;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation: none;
  animation-duration: 5s;
}
@keyframes spin1_active {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(-3050px);
  }
}

.roulette_wrap .spin_area .spin_area_inner > span {
  display: block;
  width: 100px;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  font-weight: bold;
}

.roulette_wrap .start_area {
  display: inline-block;
}
</style>
