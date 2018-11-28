<template>
  <div id="app">
   <main-menu />
   <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('call setAppConfiguration app if you need firebase')
    // this.$store.dispatch('setAppConfiguration')
  },
  computed: {
    app_title () {
      return this.$store.state.app_title
    }
  }
}
</script>

<style lang="scss">
</style>
