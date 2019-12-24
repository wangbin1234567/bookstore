import { getStudentMate } from '@/api/classmate'

const state = {
    studentMateList: [],
    statusList: []
  }
  function formatstatusList(data){
    let str=[]
    data.map(item=>{
      if(item.status){
        str.push("已阅")
      }else{
        str.push("未阅")
      }
    }) 
    return [...new Set(str)]    
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.studentMateList=payload
      state.statusList=formatstatusList(payload)
    }
  }
  const actions = {
    async getStudentMate({ commit }, payload) {
        let res =  await getStudentMate(payload)
        console.log(res);
        
        commit('ADD_ERROR_LOG', res.exam)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }