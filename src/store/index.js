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
    },
    UPDATE_EQUIPOS (state, equipos){
      state.equipos = equipos;
    }
  },
  actions: {
    initialize({ commit,dispatch }){
      axios
        .get(BASE_URL)
        .then(data => {
          const response = data.data;
          if(response.length>0){
            let partidos = response.map( (obj, index) => ({ ...obj, id: index}))
            commit('UPDATE_PARTIDOS', partidos);
            dispatch('getLigas', response);
            dispatch('getEquipos', response);
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
    },
    getEquipos({commit}, data){
      const equipos_total = data.reduce((equipos, partido) => 
      (
        [...equipos, partido.side1.name, partido.side2.name]
      ), []);

      const equipos_unicos = [...new Set(equipos_total)];

      const eq_objetos = equipos_unicos.map((n, index) => ({
          name: n,
          id: index
      }));

      commit('UPDATE_EQUIPOS', eq_objetos);
    }
  },
  getters: {
    getPartidos : state => state.partidos,
    getPartidosByLigaId : state => (idLiga) => state.partidos.filter(partido => partido.competition.id == idLiga),
    getEquipoById : state => idEquipo => state.equipos.filter(equipo => equipo.id == idEquipo)[0],
    getPartidosByEquipoId : (state,getters) => idEquipo => {
      let nameEquipo = getters.getEquipoById(idEquipo).name;
      return state.partidos.filter(partido => partido.side1.name == nameEquipo || partido.side2.name == nameEquipo)
    },
    getLigaById : (state) => (idLiga) => state.ligas.find(liga => liga.id == idLiga)
  }
})
