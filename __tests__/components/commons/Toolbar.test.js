import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/commons/Toolbar.vue'

console.error = jest.fn()

describe('Toolbar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Toolbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
