<template>
  <div>
    <v-header :siteData="siteData"></v-header>
    <nuxt />
    <v-footer :siteData="siteData" :qrCode="qrCode"></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

import apiPath from '@/config/apiPath'

import '@/assets/icons'

export default {
  components: {
    VHeader,
    VFooter,
  },

  data () {
    return {
      siteData: {},
      qrCode: [],  // 二维码图
    }
  },

  created () {
    this.initData()
  },

  methods: {
    async initData () {

      let [ siteData, qrCode ] = await Promise.all([
        this.$axios.get(apiPath.v1.siteConfig),
        this.$axios.get(`${apiPath.v1.adsCategory}/N8tNTOMMr/ads/all`),
      ])

      this.siteData = siteData
      this.qrCode = qrCode
    },
  }
}
</script>

<style>

</style>
