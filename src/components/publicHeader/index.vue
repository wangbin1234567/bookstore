<template>
    <div class="ant-layout">
       <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        name:String
    },
    data(){
        return {
        }
    },

}
</script>
<style scoped>
.ant-layout{
   overflow: hidden;
}
  h2 {
    color: rgba(0,0,0,.85);
    margin:10px 0 10.5px;
    padding:20px 0;
    font-size:21px;
  }
</style>