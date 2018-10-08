<template>
  <v-app>

    <Toolbar/>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>
import Toolbar from '@/components/commons/Toolbar.vue'
import Footer from '@/components/commons/Footer.vue'
export default {
  components: {
    Toolbar,
    Footer
  }
}
</script>
