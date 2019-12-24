import { getStudentPage } from '@/api/detail'

const state = {
    studentPageList: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.studentPageList=payload
    }
  }
  
  const actions = {
    async getStudentPage({ commit },payload) {
        let res =  await getStudentPage(payload)
        commit('ADD_ERROR_LOG', res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }