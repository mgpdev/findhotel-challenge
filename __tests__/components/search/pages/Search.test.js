import { shallowMount } from '@vue/test-utils'
import Search from '@/components/search/pages/Search.vue'

console.error = jest.fn()

describe('Page Search', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
