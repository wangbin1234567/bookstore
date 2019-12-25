<template>
    <div>
        <!-- 考试类型展示 -->
        <el-option 
            v-for="item in types"
            :key="item.exam_name"
            :label="item.exam_name"
            :value="item.exam_name"
        ></el-option>
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState({
            types:state=>state.examType.types,
        })
    },
    methods:{
       ...mapActions({
            getExamType:"examType/getExamType",
        }),
    },
    created(){
        this.getExamType()
    },
}
</script>