import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index')
const Catalogue = () => import('@/components/Catalogue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/en'
    },
    {
      path: '/:lang',
      component: {
        template: `<transition name="fade"><router-view></router-view></transition>`
      },
      children: [
        {
          path: '',
          name: 'Index',
          component: Index
        },
        {
          path: 'books',
          name: 'Books',
          component: Catalogue
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let language = to.params.lang
  if (!language) {
    language = 'en'
  }
  Vue.i18n.set(language)
  next()
})

export default router
