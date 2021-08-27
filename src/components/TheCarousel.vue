<template>
  <div class="carousel" id="slider-container">
    <div class="slide fade" id="slide-0">
      <img class="carousel_img" src="@/assets/Genshin.png" />
    </div>
    <div class="slide fade" id="slide-1">
      <img class="carousel_img" src="@/assets/Dota.png" />
    </div>
    <div class="slide fade" id="slide-2">
      <img class="carousel_img" src="@/assets/deadBy.png" />
    </div>
    <div id="arrow-wrapper">
      <p class="slider-arrow center_y" id="arrow-prev">
        &#10094;
      </p>
      <p class="slider-arrow center_y" id="arrow-next">
        &#10095;
      </p>
    </div>
    <div class="center_x" id="dots-wrapper">
      <div class="dot-nav"></div>
      <div class="dot-nav"></div>
      <div class="dot-nav"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheCarousel',
  data(){
      return {

      }
  },
  computed: {
      ...mapState(['slider_index'])
  },
  methods: {
      ...mapActions(['actionshow_slide'])
  },
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
//   max-width: 1440px;
  height: calc(100vh - 80px);  //luego cambiarlo a 100vh
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  &_img {
    width: 100%;
    height: 100%;
  }
}

.center_y{
    position: relative;
    top: 50%;
    transform: translateX(-50%);
}
.center_x{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
// .slide{
//     width: 100%;
//     height: 100%;
//     position: absolute;
// }
.slider-arrow{
    color: white;
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    padding: 10px;
}
.slider-arrow:hover{
    background-color:  rgba(0, 0, 0, .5);
    opacity: 0.4;
}
#arrow-prev{
    left: 50px;
}
#arrow-next{
    right: 20px;
}
#dots-wrapper{
    display: flex;
    position: absolute;
    bottom: 30px;
}
.dot-nav{
    width: 15px;
    height: 15px;
    border-radius: 100%;
    cursor: pointer;
    margin: 0 10px;
    border: 2px solid white;
}
.dot-nav:hover{
    background-color: white;
}
.active-dot{
    background-color: white;
}
// .fade{
//     animation-name: fade;
//     animation-duration: .5s;
// }
// @keyframes fade{
//     from{opacity: 0.4;}
//     to{opacity: 1;}
// }
</style>
