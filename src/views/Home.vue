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
            <a class="spin_stop" href="javascript:void(0)" @click="stop()"
              >STOP</a
            >
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

export default {
  name: "Home",
  data: () => ({
    isActive: "active",
    isRun: "stop",
    transformToPoint: "",
    positionStop: 0,
    userWin: "",
    items: [
      {
        userid: 201110698,
        times: 45,
      },
      {
        userid: 201122237,
        times: 44,
      },
      {
        userid: 201167421,
        times: 44,
      },
      {
        userid: 20103211,
        times: 44,
      },
      {
        userid: 2011100593,
        times: 40,
      },
      {
        userid: 20108609,
        times: 40,
      },
      {
        userid: 201119223,
        times: 39,
      },
      {
        userid: 201163436,
        times: 38,
      },
      {
        userid: 201144314,
        times: 38,
      },
      {
        userid: 20102571,
        times: 38,
      },
      {
        userid: 201167934,
        times: 35,
      },
      {
        userid: 201169849,
        times: 35,
      },
      {
        userid: 20115734,
        times: 34,
      },
      {
        userid: 20102783,
        times: 33,
      },
      {
        userid: 201194523,
        times: 33,
      },
      {
        userid: 201167617,
        times: 33,
      },
      {
        userid: 201132785,
        times: 33,
      },
      {
        userid: 201199395,
        times: 32,
      },
      {
        userid: 201191397,
        times: 32,
      },
      {
        userid: 201110767,
        times: 32,
      },
      {
        userid: 2011101355,
        times: 32,
      },
      {
        userid: 201123312,
        times: 31,
      },
      {
        userid: 201117848,
        times: 31,
      },
      {
        userid: 201119016,
        times: 31,
      },
      {
        userid: 201013206,
        times: 31,
      },
      {
        userid: 20105246,
        times: 30,
      },
      {
        userid: 201196954,
        times: 30,
      },
      {
        userid: 201129979,
        times: 30,
      },
      {
        userid: 2011100392,
        times: 29,
      },
      {
        userid: 201011186,
        times: 29,
      },
      {
        userid: 20102373,
        times: 29,
      },
      {
        userid: 201186116,
        times: 29,
      },
      {
        userid: 201014634,
        times: 29,
      },
      {
        userid: 201126551,
        times: 29,
      },
      {
        userid: 20107158,
        times: 28,
      },
      {
        userid: 20118830,
        times: 28,
      },
      {
        userid: 201111332,
        times: 28,
      },
      {
        userid: 201190336,
        times: 28,
      },
      {
        userid: 201163187,
        times: 28,
      },
      {
        userid: 2010841,
        times: 28,
      },
      {
        userid: 20118952,
        times: 28,
      },
      {
        userid: 201199303,
        times: 28,
      },
      {
        userid: 201110345,
        times: 27,
      },
      {
        userid: 201199305,
        times: 27,
      },
      {
        userid: 201187069,
        times: 27,
      },
      {
        userid: 201121663,
        times: 27,
      },
      {
        userid: 201142192,
        times: 27,
      },
      {
        userid: 201199228,
        times: 27,
      },
      {
        userid: 2011100087,
        times: 27,
      },
      {
        userid: 20101803,
        times: 27,
      },
      {
        userid: 201129461,
        times: 26,
      },
      {
        userid: 201198460,
        times: 26,
      },
      {
        userid: 201173814,
        times: 26,
      },
      {
        userid: 20103826,
        times: 26,
      },
      {
        userid: 201156805,
        times: 26,
      },
      {
        userid: 20107969,
        times: 26,
      },
      {
        userid: 201146028,
        times: 26,
      },
      {
        userid: 201115390,
        times: 26,
      },
      {
        userid: 201013846,
        times: 26,
      },
      {
        userid: 201187652,
        times: 26,
      },
      {
        userid: 201175187,
        times: 25,
      },
      {
        userid: 201169914,
        times: 25,
      },
      {
        userid: 201188008,
        times: 25,
      },
      {
        userid: 20115538,
        times: 25,
      },
      {
        userid: 201181745,
        times: 25,
      },
      {
        userid: 201141774,
        times: 25,
      },
      {
        userid: 201190090,
        times: 25,
      },
      {
        userid: 201161874,
        times: 25,
      },
      {
        userid: 201017480,
        times: 25,
      },
      {
        userid: 201198613,
        times: 25,
      },
      {
        userid: 201122462,
        times: 25,
      },
      {
        userid: 20103615,
        times: 24,
      },
      {
        userid: 201111880,
        times: 24,
      },
      {
        userid: 20107067,
        times: 24,
      },
      {
        userid: 201013399,
        times: 24,
      },
      {
        userid: 201127199,
        times: 24,
      },
      {
        userid: 201128249,
        times: 24,
      },
      {
        userid: 201122312,
        times: 24,
      },
      {
        userid: 201191587,
        times: 24,
      },
      {
        userid: 20101408,
        times: 24,
      },
      {
        userid: 201136868,
        times: 24,
      },
      {
        userid: 20101257,
        times: 24,
      },
      {
        userid: 201134812,
        times: 24,
      },
      {
        userid: 201131893,
        times: 24,
      },
      {
        userid: 201183278,
        times: 24,
      },
      {
        userid: 201193507,
        times: 24,
      },
      {
        userid: 20116300,
        times: 24,
      },
      {
        userid: 201088,
        times: 24,
      },
      {
        userid: 201117528,
        times: 23,
      },
      {
        userid: 201171913,
        times: 23,
      },
      {
        userid: 201122800,
        times: 23,
      },
      {
        userid: 201118750,
        times: 23,
      },
      {
        userid: 201176731,
        times: 23,
      },
      {
        userid: 201117666,
        times: 23,
      },
      {
        userid: 2011101143,
        times: 23,
      },
      {
        userid: 201199666,
        times: 23,
      },
      {
        userid: 201160763,
        times: 23,
      },
      {
        userid: 201134784,
        times: 23,
      },
      {
        userid: 201193245,
        times: 23,
      },
      {
        userid: 20106832,
        times: 23,
      },
    ],
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
      const demo = this.items.map((val, index) => ({
        ...val,
        position: 1650 + (index + 1) * -50,
      }));
      const random = Math.floor(Math.random() * (98 - 32) + 32);
      console.log(random, demo[random], demo);
      this.items = demo;
      this.positionStop = demo[random];
      this.isRun = "";
      setTimeout(this.stop, 5000);
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
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-4700px);
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
