import _ from 'lodash'

class RouteManager {
  static install (Vue, router) {
    Vue.prototype.route = function (routeObject) {
      const extendedRouteObject = _.extend({
        params: {
          lang: this.$i18n.locale()
        }
      }, routeObject)
      return extendedRouteObject
    }
    Vue.prototype.translate = function (language) {
      this.$i18n.set(language)
      router.push(Vue.prototype.route({
        name: router.currentRoute.name
      }))
    }
  }
}

export default RouteManager
