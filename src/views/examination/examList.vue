<template>
  <div class="test-wrap">
    <!-- 公共头部 -->
    <el-header>
        <PublicHeader :name="name" />
    </el-header>
    <section class="test-sec">
      <div class="test-list">
        <div class="test-type">
          <li>考试类型：</li>
          <el-select v-model="typeValue" placeholder="请选择">
           <el-option 
                v-for="item in types"
                :key="item.exam_name"
                :label="item.exam_name"
                :value="item.exam_name"
            ></el-option>
          </el-select>
          <li>课程：</li>
          <el-select v-model="courseValue" placeholder="请选择">
            <el-option 
                v-for="item in course"
                :key="item.subject_text"
                :label="item.subject_text"
                :value="item.subject_text">
            </el-option>
          </el-select>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </div>

      <div class="test-typ">
        <div class="head">
          <li>试卷列表</li>
          <div class="conent">
            <el-button size="mini">全部</el-button>
            <el-button size="mini">进行中</el-button>
            <el-button size="mini">已经结束</el-button>
          </div>
        </div>
        <div class="main">
          <el-table  style="width: 100%">
            <el-table-column prop="date" label="试卷信息"></el-table-column>
            <el-table-column prop="name" label="班级"></el-table-column>            
            <el-table-column prop="address" label="创建人"></el-table-column>
            <el-table-column prop="time" label="结束时间"></el-table-column>
            <el-table-column prop="status" label="操作"></el-table-column>
            <el-table-column  label="操作">
                <span style="color: #409eff">详情</span>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//引入头部组件
import PublicHeader from "@/components/publicHeader/index"
import {mapState,mapActions} from "vuex"
export default {
  props: {},
  components: {
       PublicHeader
  },
  data() {
    return {
        typeValue:"",
        courseValue:"",
        name:"试卷列表"
    }
  },
  computed: {
      ...mapState({
            types:state=>state.examType.types,
            course:state=>state.examSubject.course,
      })
  },
  methods: {
       ...mapActions({
            getExamType:"examType/getExamType",
            getSubject:"examSubject/getSubject"
        }),
  },
  created() {
        this.getExamType()
        this.getSubject()
  },
};
</script>
<style scoped lang="scss">
.test-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  header {
    width: 100%;
    height: 45px;
    line-height: 65px;
  }
}
.test-sec {
  width: 100%;
  box-sizing: border-box;
  border-radius: 13px 0;
  padding: 1rem;
}
.test-list {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: #ffffff;
}
.test-type {
  display: flex;
  box-sizing: border-box;
  li {
    margin-top: 30px;
    margin-left: 20px;
    list-style: none;
  }
  .el-select {
    margin-top: 20px;
  }
}
.test-type .el-button {
  width: 100px;
  height: 30px;
  margin-top: 25px;
  margin-left: 20px;
}
.test-typ {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 20px;
}
.test-typ .head {
  display: flex;
  justify-content: space-between;
  li {
    margin-top: 20px;
    padding: 0 5px;
    list-style: none;
  }
  .conent {
    margin-top: 20px;
  }
}
</style>