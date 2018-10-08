<template>

  <v-container
    grid-list-lg
    class="pa-2">

    <v-layout
      v-if="currentHotelList && currentHotelList.length > 0"
      row
      wrap>

      <v-flex
        v-for="item in currentHotelList"
        :key="item.id"
        xs12>
        <Item :item="item"/>
      </v-flex>

    </v-layout>

    <v-alert
      v-else-if="currentHotelList && currentHotelList.length === 0"
      :value="true"
      type="info"
      icon="replay">
      No results found! Try to change your filters.
    </v-alert>

  </v-container>

</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/search/components/list/Item.vue'
export default {
  components: {
    Item
  },
  computed: {
    ...mapGetters({
      currentHotelList: 'hotels/currentHotelList'
    })
  }
}
</script>
