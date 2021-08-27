<template>
  <div class="home">
    <TheNavbar/>
    <TheSlider/>
    <TheCarousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import { obtenerRopas } from '@/services/firestore'
import TheNavbar from '@/components/TheNavbar.vue'
import TheSlider from '@/components/TheSlider.vue'
import TheCarousel from '@/components/TheCarousel.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar,
    TheCarousel,
    TheSlider
  },
  created(){
    obtenerRopas()
  }
}
</script>
