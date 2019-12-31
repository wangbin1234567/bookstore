import {CreateExam} from "@/api/examination.js"
const state = {
    //存放参数
    data:{}
}

const mutations = {
    updateExam(state,payload){
        // console.log(payload,"...payload")
        state.data=payload
    },
}

const actions = {
   async CreateExam({commit},payload){       
        let res = await CreateExam(payload)
        localStorage.removeItem("addTest",JSON.stringify(res))
        localStorage.setItem("addTest",JSON.stringify(res))
        commit("updateExam",res.data)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }