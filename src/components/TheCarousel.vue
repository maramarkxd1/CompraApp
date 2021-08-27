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
      <p
        class="slider-arrow center_y"
        @click="show_slide(--this.slider_index)"
        id="arrow-prev"
      >
        &#10094;
      </p>
      <p
        class="slider-arrow center_y"
        @click="show_slide(++this.slider_index)"
        id="arrow-next"
      >
        &#10095;
      </p>
    </div>
    <div class="center_x" id="dots-wrapper">
      <div class="dot-nav" @click="show_slide(this.slider_index)"></div>
      <div class="dot-nav" @click="show_slide(this.slider_index)"></div>
      <div class="dot-nav" @click="show_slide(this.slider_index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',
  data() {
    return {
      slider_index: 0
    }
  },
  computed: {},
  methods: {
    show_slide(index) {
      const slides = document.querySelectorAll('.slide')
      const dots = document.querySelectorAll('.dot-nav')
      if (index > slides.length) this.slider_index = 0
      if (index < 0) this.slider_index = slides.length - 1
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        dots[i].classList.remove('active-dot')
      }
      slides[this.slider_index].style.display = 'block'
      dots[this.slider_index].classList.add('active-dot')
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  //   max-width: 1440px;
  height: calc(100vh - 80px); //luego cambiarlo a 100vh
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  background-image: url('https://images2.alphacoders.com/109/thumb-1920-1094662.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  &_img {
    width: 100%;
    height: 100%;
  }
}

.center_y {
  position: relative;
  top: 50%;
  transform: translateX(-50%);
}
.center_x {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
}
.slider-arrow {
  color: white;
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  padding: 10px;
  opacity: 1;
}
.slider-arrow:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.4;
}
#arrow-prev {
  left: 50px;
}
#arrow-next {
  right: 20px;
}
#dots-wrapper {
  display: flex;
  position: absolute;
  bottom: 30px;
}
.dot-nav {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  cursor: pointer;
  margin: 0 10px;
  border: 2px solid white;
  box-shadow: 2px 2px 12px hsl(0deg 0% 100% / 75%),
    -2px -2px 12px hsl(0deg 0% 100% / 75%);
  opacity: 1;
}
.dot-nav:hover {
  background-color: white;
}
.active-dot {
  background-color: white;
}
.fade {
  animation-name: fade;
  animation-duration: 0.5s;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
