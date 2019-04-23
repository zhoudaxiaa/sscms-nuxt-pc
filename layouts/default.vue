<template>
  <div>
    <v-header></v-header>
    <nuxt />
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

import '@/assets/icons'

export default {
  components: {
    VHeader,
    VFooter,
  }
}
</script>

<style>

</style>
