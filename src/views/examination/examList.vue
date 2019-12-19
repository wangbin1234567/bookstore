<template>
    <div>
        <el-container>
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                
            </el-main>
        </el-container>
    </div>
</template>
<script>
import PublicHeader from "@/components/publicHeader/index"
export default {
    props:{

    },
    components:{
         PublicHeader
    },
    data(){
        return {
             name:"试卷列表"
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>

</style>