import { shallowMount } from '@vue/test-utils'
import Filters from '@/components/search/components/filters/Filters.vue'

console.error = jest.fn()

describe('Search Filters', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Filters)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
