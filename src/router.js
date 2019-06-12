import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import SearchPage from './components/SearchPage.vue'
import EditPage from './components/EditPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchPage',
      component: SearchPage
    },
    {
      path: '/edit',
      name: 'about',
      component: EditPage
    }
  ]
})
