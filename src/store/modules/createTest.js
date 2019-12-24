import {CreateTest} from "@/api/examination.js"
const state = {
    // 试题列表
    createTestList:[]
}

const mutations = {
    updateTest(state,payload){
    state.createTestList=payload
    window.console.log(state.createTestList,"-----createlist")
    },
}

const actions = {
   async CreateTest({commit},payload){
       let res = await CreateTest(payload)
       console.log(res)
       commit("updateTest",res.data.questions)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }