import { getClass } from '@/api/class'

const state = {
    classList: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.classList=payload
    }
  }
  
  const actions = {
    async getClass({ commit }) {
        let res =  await getClass()
        commit('ADD_ERROR_LOG', res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }