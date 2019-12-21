import { getGrade } from '@/api/grade'

const state = {
    gradeList: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.gradeList=payload
    }
  }
  
  const actions = {
    async getGrade({ commit }) {
        let res =  await getGrade()
        commit('ADD_ERROR_LOG', res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }

