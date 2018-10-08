import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/commons/Logo.vue'

console.error = jest.fn()

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
