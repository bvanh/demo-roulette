<template>
  <div class="results">
    <v-row>
      <v-col class="custom5cols" v-for="item of listUsersWin" :key="item.userid">{{
        item.userid
      }}</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    listUsersWin: Array,
  },
  name: "results",
  data: () => ({
    results: [
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
        userid: 20103211,
        times: 44,
      },
      {
        userid: 20103211,
        times: 44,
      },
    ],
  }),
};
</script>

<style lang='scss'>
@import "./varibles.scss";
.results {
  background: transparent url(../assets/table_result.png) no-repeat center;
  height: 95vh;
  background-size: contain;
  padding: 6.5rem 3rem 1rem 7rem;
  background-position: bottom center;
  position: relative;
  top: 3rem;
  .custom5cols {
    @extend .font-static;
    width: 20%;
    max-width: 20%;
    flex-basis: 20%;
    font-family: "Roboto";
    font-size: 18px;
    color: black;
    //line-height: 0.762;
    // text-align: center;
    text-shadow: 0px 4px 2px #efb071;
    -moz-transform: scale(1, 0.8);
    -webkit-transform: scale(1, 0.8);
    -ms-transform: scale(1, 0.8);
  }
}
</style>