<template>
  <div>
    
    <v-btn
      block
      color="orange"
      dark
      class="mb-4"
      @click.stop="drawer = !drawer">
      Filters
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>

      <div class="pa-4">
        <h3 @click.stop="drawer = !drawer">
          <v-icon>arrow_back</v-icon>
          Filters
        </h3>
      </div>  

      <v-layout
        align-center
        justify-start
        column>      

        <v-flex
          xs12
          class="pa-4">
          <h4>
            <v-icon>sentiment_satisfied_alt</v-icon> Guest Rating
          </h4>     
          <FilterOptions
            :options="[6, 7, 8, 9]"
            :model="filters.guest"
            type="radio"
            icon="add"
            bg-color="#2d8beb"
            @change="filterGuestRatingChange"/>
        </v-flex>

        <v-flex
          xs12
          class="pa-4">
          <h4>
            <v-icon>location_on</v-icon> Star Rating
          </h4>      
          <FilterOptions
            :options="[2, 3, 4, 5]"
            :model="filters.star"
            type="checkbox"
            icon="star"
            bg-color="#f1be01"
            @change="filterStarRatingChange"/>
        </v-flex>

      </v-layout>
    </v-navigation-drawer>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterOptions from '@/components/search/components/filters/mobile/FilterOptions.vue'
export default {
  components: {
    FilterOptions
  },
  data() {
    return {
      drawer: false,
      waitingFilter: false,
      filters: {
        guest: null,
        star: []
      }
    }
  },
  computed: {
    ...mapGetters({
      currentFilters: 'hotels/currentFilters'
    })
  },
  /* TODO
  watch: {
    currentFilters: {
      handler(val) {
        console.log('watch mobile currentFilters', val)
        this.populateFilters()
      },
      deep: true
    }
  },
  */
  created() {
    this.populateFilters()
  },
  methods: {
    filterGuestRatingChange(data) {
      this.filters.guest = data
      this.dispatchFilter()
    },
    filterStarRatingChange(data) {
      this.filters.star = data
      this.dispatchFilter()
    },
    populateFilters() {
      this.filters = {
        guest: parseInt(
          (this.currentFilters.guestRating.min +
            this.currentFilters.guestRating.max) /
            2
        ),
        star:
          !this.currentFilters.starRating ||
          this.currentFilters.starRating.length === 0
            ? ['any']
            : this.currentFilters.starRating
      }
    },
    setFilters() {
      this.$store.commit('hotels/updateFilter', {
        key: 'guestRating',
        val: {
          min: this.filters.guest === 'any' ? 5 : this.filters.guest,
          max: 10
        }
      })
      this.$store.commit('hotels/updateFilter', {
        key: 'starRating',
        val: this.filters.star.filter(value => {
          return value != 'any'
        })
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
h3 {
  cursor: pointer;
  color: #2d8beb;
}
</style>
