<template>
  <v-layout
    row
    justify-start
    align-center
    class="py-1">

    <v-flex
      xs12
      sm6
      md4>

      <span class="sort-label pt-3 subheading">
        Sort by
      </span>

      <v-select
        v-model="sortSelect"
        :items="items"
        item-text="label"
        item-value="id"
        solo
        persistent-hint
        return-object
        single-line
        @change="dispatchFilter"/>

    </v-flex>

    <v-flex
      v-if="currentHotelList && currentHotelList.length > 0"
      xs12
      sm6
      md8>

      <div class="pt-0 pl-3 subheading text-xs-left font-weight-bold">
        We found {{ currentHotelList.length + (currentHotelList.length > 1 ? ' hotels' : ' hotel') }}
      </div>

    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        { id: 'stars', label: 'Stars' },
        { id: 'price', label: 'Price' },
        { id: 'guest', label: 'Guest Rating' }
      ],
      sortSelect: { id: 'guest', label: 'Guest Rating' }
    }
  },
  computed: {
    ...mapGetters({
      currentHotelList: 'hotels/currentHotelList'
    })
  },
  methods: {
    dispatchFilter() {
      if (this.sortSelect) {
        this.$store.commit('hotels/updateSortBy', this.sortSelect.id)
      }
      this.$store.dispatch('hotels/filterHotels')
    }
  }
}
</script>

<style lang="stylus" scoped>
.sort-label {
  display: block;
  width: 80px;
  float: left;
}
</style>
