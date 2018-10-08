<template>
  <v-toolbar 
    :dark="false" 
    color="primary">
    <v-toolbar-title>
      <nuxt-link
        to="/">
        <logo/>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
import Logo from '@/components/commons/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>
