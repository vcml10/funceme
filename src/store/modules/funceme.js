// import things here
// import router from '@/router'
import axios from 'axios'

const state = {
  stations: [],
  stationInfo: {},
  error: null,
  errorMsg: null,
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  getStations ({commit, state}) {
    commit('setLoading', true)
    var objs = []
    let url = 'http://api.funceme.br/rest/pcd/estacao?limit=500&municipio.uf=CE'
    let columns = [
      {
        field: 'codigo',
        label: 'Código',
        width: '40',
        sortable: true
      },
      {
        field: 'nome',
        label: 'Nome'
      },
      {
        field: 'municipio.nome',
        label: 'Município',
        sortable: true
      }
    ]
    axios.get(url)
      .then(response => {
        objs = response.data.list
        commit('setStations', objs)
        commit('setStationsColumns', columns)
      })
      .catch(error => {
        // this.error.push(e)
        console.log(error)
        let errorMsg = {
          'code': '0x100',
          'msg': error.toString().split(':')[1]
        }
        commit('setError', true)
        commit('setErrorMessage', errorMsg)
      })
      .finally(() => commit('setLoading', false))
  },
  getStationInfo ({commit, state}) {
    console.log('getstationinfo')
  }
}

// mutations
const mutations = {
  setStations (state, payload) {
    state.stations = payload
  },
  setStationsColumns (state, payload) {
    state.stationsColumns = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setErrorMessage (state, payload) {
    state.errorMsg = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
