<template>
  <div>

    <Filters/>

    <Sort/>

    <List/>

  </div>
</template>

<script>
import Filters from '@/components/search/components/filters/Filters.vue'
import Sort from '@/components/search/components/filters/Sort.vue'
import List from '@/components/search/components/list/List.vue'
export default {
  components: {
    Filters,
    Sort,
    List
  }
}
</script>
