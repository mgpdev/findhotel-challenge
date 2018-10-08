import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/commons/Footer.vue'

console.error = jest.fn()

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
