import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const BASE_URL = "https://www.scorebat.com/video-api/v1/";

export default new Vuex.Store({
  state: {
    partidos: [],
    ligas: [],
    equipos: []
  },
  mutations: {
    UPDATE_PARTIDOS (state, partidos){
      state.partidos = partidos;
    },
    UPDATE_LIGAS (state, ligas){
      state.ligas = ligas;
    }
  },
  actions: {
    initialize({ commit,dispatch }){
      axios
        .get(BASE_URL)
        .then(data => {
          const response = data.data;
          if(response.length>0){
            commit('UPDATE_PARTIDOS', response);
            dispatch('getLigas', response)
          } 
        })
        .catch(err => {
          console.log(err)
        })
    },
    getLigas({commit}, data){
      const ligas_total = data.reduce(( ligas, partido) => ([...ligas, partido.competition]), []);

      const ids_ligas = ligas_total.reduce((ids, liga) => {
        return [...ids, liga.id];
      }, [])

      const ids_unicos = [...new Set(ids_ligas)];
      
      const ligas_unicas = [];

      ids_unicos.forEach(id => {
        ligas_unicas.push( ligas_total.find (liga => liga.id === id));          
      });

      commit('UPDATE_LIGAS', ligas_unicas);
    }
  },
  getters: {
  }
})
