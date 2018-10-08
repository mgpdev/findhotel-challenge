import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Sort from '@/components/search/components/filters/Sort.vue'

console.error = jest.fn()

describe('Search Sort', () => {
  const localVue = createLocalVue()
  localVue.use(Vuetify)
  localVue.use(Vuex)

  let store
  let wrapper

  const getWrapper = () => {
    return shallowMount(Sort, {
      methods: {
        getAsset: () => ''
      },
      stubs: {},
      store,
      localVue,
      sync: false
    })
  }

  beforeAll(() => {
    store = new Vuex.Store({
      modules: {
        hotels: {
          getters: {
            currentHotelList: state => []
          }
        }
      }
    })
    wrapper = getWrapper()
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
