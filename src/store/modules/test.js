import { testManagement, testGenre, testSubject, addTestPort, addQuestionsType, testCondition, testInquire, addNewExam, questionsUpdate } from '@/api/test'
const state = {
  testList: [],
  testGenreList: [],
  testSubjectList: [],
  estConditionList: []
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
  },
  setTestCondition(state, payload) {
    state.estConditionList = payload
  }
}
const actions = {
  async testManagement({ commit }) {
    const res = await testManagement()
    commit('setTest', res.data)
  },
  async testGenre({ commit }) {
    const res = await testGenre()
    commit('setTestGenre', res.data)
  },
  async testSubject({ commit }) {
    const res = await testSubject()
    commit('setTestSubject', res.data)
  },
  async addTestPort({ commit }, payload) {
    const data = {
      questions_type_id: payload.total.value2,
      questions_stem: payload.total.textarea1,
      subject_id: payload.total.value1,
      exam_id: payload.total.value,
      user_id: payload.total.userId,
      questions_answer: payload.total.textarea2,
      title: payload.total.input
    }
    const res = await addTestPort(data)
    console.log('res老骥伏枥===================', res)
  },
  async addQuestionsType() {
    const res = await addQuestionsType()
    console.log(res)
  },
  async testCondition({ commit }) {
    const res = await testCondition()
    commit('setTestCondition', res.data)
    console.log('resData', res)
  },
  async testInquire({ commit }, payload) {
    const params = {}
    if (payload.subjects) {
      params.subject_id = payload.subjects
    }
    if (payload.region) {
      params.exam_id = payload.region
    }
    if (payload.region1) {
      params.questions_type_id = payload.region1
    }
    const res = await testInquire(params)
    commit('setTestCondition', res.data)
  },
  async addNewExam() {
    const res = await addNewExam()
    console.log('res我爱你----------', res)
  },
  async questionsUpdate({ commit }, payload) {
    const data = {
      questions_type_id: payload.total.value2,
      questions_stem: payload.total.textarea1,
      subject_id: payload.total.value1,
      exam_id: payload.total.value,
      questions_id: payload.total.questions_id,
      questions_answer: payload.total.textarea2,
      title: payload.total.input
    }
    console.log('payload老冀', payload)
    const res = await questionsUpdate(data)
    console.log('res冀志民', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
