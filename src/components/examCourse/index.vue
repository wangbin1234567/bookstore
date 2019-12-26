<template>
    <div>
        <!-- 课程选择展示 -->
       <el-option 
            v-for="item in course"
            :key="item.subject_text"
            :label="item.subject_text"
            :value="item.subject_id"
        ></el-option>
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState({
            course:state=>state.examSubject.course,
        })
    },
    methods:{
       ...mapActions({
            getSubject:"examSubject/getSubject"
        }),
    },
    created(){
        this.getSubject()
    },
}
</script>