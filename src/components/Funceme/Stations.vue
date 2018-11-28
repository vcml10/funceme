<template>
  <div id="stations">
    <section class="section">
      <div class="container">
        <h1 class="title">Estações</h1>
        <b-notification
          type="is-danger"
          :closable="false"
          v-if="error">
          A aplicação não está funcionamento corretamente. Aconteceu um erro de {{ errorMsg.msg }}.
        </b-notification>
        <div class="">
          <b-field label="Procure pelo nome da estação">
          <b-input v-model="search_query.name" />
      </b-field>
        </div>
        <b-table
          :loading="loading"
          :data="stations"
          :paginated="true"
          :per-page="10"
          :columns="stationsColumns">
        </b-table>
        {{ stations }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Stations',
  data () {
    return {
      empty: false,
      data: this.stations,
      search_query: {
        name: ''
      }
    }
  },
  created () {
    this.$store.dispatch('getStations')
    console.log(this.stations.length)
    if (this.stations.length === 0) {
      this.empty = true
    }
    console.log(this.stations)
  },
  computed: {
    stations () {
      return this.$store.state.funceme.stations
    },
    stationsColumns () {
      return this.$store.state.funceme.stationsColumns
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
    /* filter () {
      var nameRe = new RegExp(this.search_query.name, 'i')
      var data = []
      for (this.i in this.data) {
        console.log(this.data)
        console.log(this.stations.
        if (this.stations.nome[this.i].name.match(nameRe)) {
          data.push(this.data[this.i])
        }
      }
      return this.stations

    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
