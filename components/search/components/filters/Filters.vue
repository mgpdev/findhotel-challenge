<template>
  <div>
    <FiltersDesktop class="hidden-sm-and-down"/>
    <FiltersMobile class="hidden-md-and-up"/>
  </div>
</template>

<script>
import FiltersDesktop from '@/components/search/components/filters/desktop/FiltersDesktop.vue'
import FiltersMobile from '@/components/search/components/filters/mobile/FiltersMobile.vue'
export default {
  components: {
    FiltersDesktop,
    FiltersMobile
  }
}
</script>
