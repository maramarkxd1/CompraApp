<template>
  <div class="home">
    <TheNavbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import { obtenerRopas } from '@/services/firestore'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar
  },
  created(){
    obtenerRopas()
  }
}
</script>
