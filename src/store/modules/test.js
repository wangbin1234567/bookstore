import { testManagement, testGenre, testSubject } from '@/api/test'
const state = {
  testList: [],
  testGenreList: [],
  testSubjectList: []
}
const mutations = {
  setTest(state, payload) {
    state.testList = payload
  },
  setTestGenre(state, payload) {
    state.testGenreList = payload
  },
  setTestSubject(state, payload) {
    state.testSubjectList = payload
  }
}
const actions = {
  async testManagement({ commit }) {
    const res = await testManagement()
    console.log('res---------', res)
    commit('setTest', res.data)
  },
  async testGenre({ commit }) {
    const res = await testGenre()
    commit('setTestGenre', res.data)
  },
  async testSubject({ commit }) {
    const res = await testSubject()
    commit('setTestSubject', res.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
