<template>
  <v-layout
    align-center
    justify-space-around
    row
    fill-height>

    <v-flex
      md4
      class="pa-4">
      <h4>
        <v-icon>attach_money</v-icon> Max price
      </h4>
      <v-range-slider
        v-model="filters.price"
        :max="3000"
        :min="50"
        :step="10"
        :thumb-size="30"
        color="primary"
        label="€"
        thumb-label="always"/>
    </v-flex>

    <v-flex
      md4
      class="pa-4">
      <h4>
        <v-icon>sentiment_satisfied_alt</v-icon> Min rating
      </h4>     
      <v-range-slider
        v-model="filters.rating"
        :max="10"
        :min="5"
        :step="0.2"
        :thumb-size="30"
        color="orange"
        thumb-label="always"/>
    </v-flex>

    <v-flex
      md4
      class="pa-4">
      <h4>
        <v-icon>location_on</v-icon> Distance from city center
      </h4>      
      <v-range-slider
        v-model="filters.distance"
        :max="50"
        :min="1"
        :step="2"
        :thumb-size="30"
        color="primary"
        label="Km"
        thumb-label="always"/>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      waitingFilter: false,
      filters: {
        price: [],
        rating: [],
        distance: []
      }
    }
  },
  computed: {
    ...mapGetters({
      currentFilters: 'hotels/currentFilters'
    })
  },
  watch: {
    filters: {
      handler(val) {
        this.dispatchFilter()
      },
      deep: true
    }
    /* TODO
    currentFilters: {
      handler(val) {
        console.log('watch desktop currentFilters', val)
        this.populateFilters()
      },
      deep: true
    }
    */
  },
  created() {
    this.populateFilters()
  },
  methods: {
    populateFilters() {
      this.filters = {
        price: [this.currentFilters.price.min, this.currentFilters.price.max],
        rating: [
          this.currentFilters.guestRating.min,
          this.currentFilters.guestRating.max
        ],
        distance: [
          this.currentFilters.distance.min,
          this.currentFilters.distance.max
        ]
      }
    },
    setFilters() {
      this.$store.commit('hotels/updateFilter', {
        key: 'price',
        val: {
          min: this.filters.price[0],
          max: this.filters.price[1]
        }
      })
      this.$store.commit('hotels/updateFilter', {
        key: 'guestRating',
        val: {
          min: this.filters.rating[0],
          max: this.filters.rating[1]
        }
      })
      this.$store.commit('hotels/updateFilter', {
        key: 'distance',
        val: {
          min: this.filters.distance[0],
          max: this.filters.distance[1]
        }
      })
    },
    dispatchFilter() {
      if (!this.waitingFilter) {
        this.waitingFilter = true
        setTimeout(() => {
          this.waitingFilter = false
          this.setFilters()
          this.$store.dispatch('hotels/filterHotels')
        }, 1500)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-input--slider {
  margin-top: 50px;
}
</style>
