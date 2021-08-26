<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import { obtenerRopas } from '@/services/firestore'

export default {
  name: 'Home',
  components: {
  },
  created(){
    obtenerRopas()
  }
}
</script>
