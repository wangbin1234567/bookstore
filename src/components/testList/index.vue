<template>
    <div>
        <!-- 考试题目列表 -->
        <div class="style_questionitem__3ETlC" v-for="(item,index) in testList.questions" :key="index">
            <h4>{{item.title}}  <a href="" style="float:right" @click="delItem(item.questions_type_id)">删除</a> </h4>
            <div class="react-markdown">
                <p>{{item.questions_type_text}}</p>
                <pre>
                    <code>
                        {{item.questions_stem}}
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
            testList:JSON.parse(localStorage.getItem("addTest")).data
        }
    },
    methods:{
        ...mapActions({
            delG2dts:"examDel/delG2dts"
        }),
        delItem(questions_type_id){
            console.log(questions_type_id,".....")
            this.delG2dts(questions_type_id)
        }
    }
}
</script>
<style scoped >
    .style_questionitem__3ETlC{
        text-align: left;
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
    }
    .style_questionitem__3ETlC h4{
        height:20.8px;
        color:rgba(0,0,0,0.85);
        font-size:14px;
    }
    .style_questionitem__3ETlC h4 a{
        touch-action: manipulation;
        color: #0139FD;
        background-color: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
    }
    .react-markdown{
        line-height: 1.6;
        word-wrap: break-word;
    }
    .react-markdown p{
        height:22.4px;
        color:rgba(0,0,0,0.65);
        font-size:14px;
        margin:0 0 21px;
    }
    .react-markdown pre{
        display: block;
        padding: 14px;
        overflow: auto;
        line-height: 1.3;
        max-height: 35em;
        color: #657b83;
        background-size: 30px 30px;
    }
    .react-markdown pre code{
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 14px;
    }
</style>