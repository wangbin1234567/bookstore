import {CreateExam} from "@/api/examination.js"
const state = {
}

const mutations = {
    updateExam(state,payload){
     window.console.log(state)
     window.console.log(payload)
    },
}

const actions = {
   async CreateExam({commit},payload){
       window.console.log(payload)
       let res = await CreateExam(payload)
       window.console.log("-----------------")
       window.console.log(res)
       commit("updateExam",res)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }