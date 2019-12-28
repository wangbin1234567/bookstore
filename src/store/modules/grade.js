import { getGrade } from '@/api/grade'

const state = {
    gradeList: [],
    gradeListItem: [],
    gradeChecked: ""
  }
  function formatgradeList(data){
    let str=[]
    data.map(item=>{
      str.push(item)
    }) 
    return str    
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.gradeList=payload
      state.gradeListItem=formatgradeList(payload)
    },
    getGradeChecked(state,payload){
      state.gradeChecked=state.gradeList.filter(item=>item.grade_id===payload)[0].grade_name
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

