import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import NuxtLink from '@/.nuxt/components/nuxt-link'

import { mount, createLocalVue } from '@vue/test-utils'
import HelpDashboard from '@/layouts/help-dashboard'
import { routes } from '@/test/fixtures/routes'

describe('Help dashboard layout', () => {
  let localVue = null
  let wrapper = null
  let store = null
  let router = null

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.use(Vuex)
    localVue.use(VueRouter)
    localVue.component(NuxtLink.name, NuxtLink)
    store = new Vuex.Store({
      state: {
        currentUser: {
          name: 'joebloggs'
        }
      }
    })
    router = new VueRouter({
      routes
    })
    wrapper = mount(HelpDashboard, {
      localVue,
      store,
      router
    })
  })

  it('renders correctly', () => {
    const renderer = require('vue-server-renderer').createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
