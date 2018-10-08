import hotels from '@/services/hotels'

const state = () => ({
  filters: {
    price: {
      min: 50,
      max: 3000
    },
    // 5-10
    guestRating: {
      min: 5,
      max: 10
    },
    // 1-5
    starRating: [],
    // in KM
    distance: {
      min: 1,
      max: 100
    }
  },
  sortBy: 'guest',
  list: null
})

const getters = {
  currentFilters: state => state.filters,
  currentHotelList: state => state.list
}

const mutations = {
  updateFilter(state, { key, val }) {
    state.filters[key] = val
  },
  updateSortBy(state, val) {
    state.sortBy = val
  },
  updateList(state, list) {
    state.list = list
  }
}

const actions = {
  filterHotels({ state, commit, rootGetters }, data) {
    hotels
      .getHotels(state.filters, state.sortBy, rootGetters.currentLocation)
      .then(list => {
        commit('updateList', list)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
