import { getGrade } from '@/api/grade'

const state = {
    gradeList: [],
    gradeListItem: []
  }
  function formatgradeList(data){
    let str=[]
    data.map(item=>{
      str.push(item.grade_name)
    }) 
    return str    
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.gradeList=payload
      state.gradeListItem=formatgradeList(payload)
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

