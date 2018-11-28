<template>
  <div id="stations">
    <section class="section">
      <div class="container">
        <h1 class="title">Estação - {{ empty }}</h1>
        <b-notification
          type="is-danger"
          :closable="false"
          v-if="error">
          A aplicação não está funcionamento corretamente. Aconteceu um erro de {{ errorMsg.msg }}.
        </b-notification>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Station',
  data () {
    return {
      empty: false
    }
  },
  created () {
    this.$store.dispatch('getStation')
  },
  computed: {
    station () {
      return this.$store.state.funceme.station
    },
    loading () {
      return this.$store.state.funceme.loading
    },
    error () {
      return this.$store.state.funceme.error
    },
    errorMsg () {
      return this.$store.state.funceme.errorMsg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
