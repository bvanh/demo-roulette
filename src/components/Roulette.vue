<template>
  <div class="roulette_wrap">
    <div class="inner">
      <div :class="`spin_item active`">
        <div id="Spin1" class="spin_area">
          <div
            :class="`spin_area_inner ${isRun}`"
            ref="busstop"
            v-bind:style="{
              transform: `translateY(${transformToPoint}px) !important`,
            }"
          >
            <span
              v-for="item in items"
              :key="item.userid"
              :class="[userWin === item.userid ? 'win-alert' : '']"
              >{{ item.userid }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[isSpin ? 'disable-spin button_area' : 'button_area']"
      @click="start"
    ></div>
    <img src="../assets/character_1.png" class="char-1" />
    <img
      src="../assets/frame_win.png"
      :class="[isSpin ? 'frame-win' : 'frame-win frame-win-hight-light']"
    />
  </div>
</template>
<script>
//color: #fdb845;
// @ is an alias to /src
//import "swiper/css/swiper.css";
import { getListLogin } from "../api/baseApi";
export default {
  name: "Roulette",
  props: {
    getUserWin: Function,
  },
  data: () => ({
    isSpin: false,
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
        this.getUserWin(this.positionStop);
        this.isSpin = false;
      }, 4000);
    },
    async start() {
      await getListLogin(this, this.times);
      this.isRun = "";
      this.isSpin = true;
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
@import "./varibles.scss";
.roulette_wrap {
  // margin: 100px;
  background: transparent url(../assets/bg_roulette2.png) no-repeat center;
  height: 50vh;
  background-size: contain;
  text-align: center;
  position: relative;
  .button_area {
    background: transparent url(../assets/btn_spin.png) no-repeat center;
    height: 40px;
    width: 135px;
    position: absolute;
    bottom: 1.5rem;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    background-size: contain;
    cursor: pointer;
    &:active {
      transform: translateX(-50%) scale(0.9);
    }
  }
  .disable-spin {
    pointer-events: none;
  }
  .char-1,
  .frame-win {
    position: absolute;
  }
  .char-1 {
    left: 2rem;
    bottom: 55px;
    width: 25%;
    z-index: 2;
  }
  .frame-win {
    left: 8.5rem;
    bottom: 11.42rem;
    width: 70%;
    z-index: 1;
  }
  .frame-win-hight-light {
    animation: hight-light 0.5s ease 0s infinite normal none running;
  }
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
.roulette_wrap .spin_area .spin_area_inner > span {
  @extend .font-static;
  display: block;
  width: 150px;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}
.win-alert {
  color: #fdb845 !important;
}
.roulette_wrap .start_area {
  display: inline-block;
}
@keyframes spin1_active {
  0% {
    transform: translateY(-4700px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes hight-light {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.005, 1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
