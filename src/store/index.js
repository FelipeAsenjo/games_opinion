import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [],
    opiniones: []
  },
  mutations: {
    fetchedGames: (state, juegos) => state.games = juegos,
    postOpinion: (state, payload) => {

      state.opiniones.push( payload )
    },
    deleteOpinion: (state, indice) => {
      state.opiniones.splice(indice, 1)
    },
    updateOpinion: ( state, payload ) => {
      let opinion = state.opiniones[payload.id]
      opinion.username = payload.username
      opinion.usersOpinion = payload.opinion
      console.log( payload, opinion )
    }
  },
  actions: {
  },
  getters: {
    fetchEdit: state => id => {
      return state.opiniones[id]
    }
  }
})
