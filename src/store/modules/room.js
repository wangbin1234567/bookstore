import { getRoom } from '@/api/room'

const state = {
    roomList: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.roomList=payload
    }
  }
  
  const actions = {
    async getRoom({ commit }) {
        let res =  await getRoom()
        commit('ADD_ERROR_LOG', res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
