import {CreateExam} from "@/api/examination.js"
const state = {
    //存放参数
    data:""
}

const mutations = {
    updateExam(state,payload){
    state.data=payload
    },
}

const actions = {
   async CreateExam({commit},payload){
       let res = await CreateExam(payload)
       commit("updateExam",res)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }