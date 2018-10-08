import Vuex from 'vuex'

/* Store Modules */
import hotels from './hotels'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      location: {
        lat: 52.361205,
        long: 4.899857
      }
    }),
    getters: {
      currentLocation: state => state.location
    },
    mutations: {
      updateLocation(state, location) {
        state.location = location
      }
    },
    modules: {
      hotels
    }
  })
}

export default createStore
