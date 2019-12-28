import { asyncRoutes, constantRoutes, authorityRoutes } from '@/router'

// /**
//  * Use meta.role to determine if the current user has permission
//  * @param roles
//  * @param route
//  */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

// /**
//  * Filter asynchronous routing tables by recursion
//  * @param routes asyncRoutes
//  * @param roles
//  */
// export function filterAsyncRoutes(routes, roles) {
//   const res = []

//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  async generateRoutes({ commit }, viewAuthority) {
    console.log(viewAuthority,"222222222222222")
    let accessedRoutes = [];
    authorityRoutes.forEach(item=>{
      let children = [], unAuthorized = [];
      item.children.forEach(value=>{
        if (viewAuthority.findIndex(view=>view.view_id === value.meta.view_id) !== -1){
          children.push(value);
        }else{
          unAuthorized.push(value);
        }
      })

      // 把拥有的路由重置children
      item.children = children;
      accessedRoutes.push(item);

      // 把没有的路由重定向到401
      unAuthorized.forEach(value=>{
        accessedRoutes.push({
          path: item.path+'/'+value.path,
          redirect: '/401'
        })
      })
    })

    commit('SET_ROUTES', accessedRoutes);
    console.log('accessedRoutes...', accessedRoutes);
    return accessedRoutes;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
