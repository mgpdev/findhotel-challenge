import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import List from '@/components/search/components/list/List.vue'

console.error = jest.fn()

describe('Search List', () => {
  const localVue = createLocalVue()
  localVue.use(Vuetify)
  localVue.use(Vuex)

  let store
  let wrapper

  const getWrapper = () => {
    return shallowMount(List, {
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
