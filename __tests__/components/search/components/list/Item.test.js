import { shallowMount } from '@vue/test-utils'
import Item from '@/components/search/components/list/Item.vue'

console.error = jest.fn()

const hotels = require('@/services/fakeHotels.json')

describe('Search Item', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Item, {
      propsData: {
        item: hotels[0]
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
