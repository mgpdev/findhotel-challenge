<template>
  <v-card
    class="mb-5 item-card">

    <v-layout
      row
      wrap>

      <v-flex
        xs12
        md4
        class="item-image">
        <v-img
          :src="item.gallery[0].source"/>
      </v-flex>

      <v-flex
        xs12
        md5
        class="pa-0 ma-0">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ item.hotel.name }}</div>
            <div class="text-xs-left">
              <v-rating
                v-model="item.starRating"
                readonly/>
            </div>
            <div class="subheadline">
              <v-icon>sentiment_satisfied_alt</v-icon>
              Guest rating: {{ item.guestRating }}
            </div>
            <div class="subheadline">
              <v-icon>location_on</v-icon>
              {{ item.distanceCityCenter }} Km to city centre of
              {{ item.address.city }}
            </div>
            <div class="text-xs-left">
              <v-chip
                v-for="tag in item.tags"
                :key="tag"
                small>
                {{ tag }}
              </v-chip>
            </div>            
          </div>
        </v-card-title>
      </v-flex>

      <v-flex
        xs12
        md3
        class="pa-0 ma-0">
        <v-card-title primary-title>
          <div class="text-through text-orange w100 subheading text-xs-center">
            {{ item.betterOption.currencySign }}
            {{ item.betterOption.priceFrom }}
          </div>
          <div class="w100 display-1 text-xs-center font-weight-bold">
            {{ item.betterOption.currencySign }}
            {{ item.betterOption.price }}
          </div>
          <div class="text-green w100 text-xs-center">
            Free cancelation
          </div>
          <div class="w100 text-xs-center">
            <v-btn 
              color="orange"
              round
              block
              dark>
              {{ item.betterOption.origin }}
              <v-icon>arrow_right_alt</v-icon>
            </v-btn>
          </div>
          <div class="w100 pa-1">
            <v-layout
              v-for="option in item.options"
              :key="option.origin"
              align-center
              justify-space-between
              row
              wrap
              class="pa-0 ma-0">
              <v-flex
                xs8
                class="pa-0">
                {{ option.origin }}
              </v-flex>
              <v-flex
                xs4
                class="pa-0">
                {{ item.betterOption.currencySign }}
                {{ option.price }}
              </v-flex>
            </v-layout>
          </div>
        </v-card-title>
      </v-flex>

    </v-layout>
  
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-card {
  width: 100%;
}

.item-image {
  /*
  padding: 0px !important;
  margin: 0px !important;
  */
  padding: 10px 20px !important;
}

.w100 {
  width: 100%;
}

.text-through {
  text-decoration: line-through;
}

.text-orange {
  color: orange;
}

.text-green {
  color: green;
}
</style>
