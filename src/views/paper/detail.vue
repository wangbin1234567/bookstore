<template>
  <div class="ant-layout">
    <h2>阅卷</h2>
    {{studentPageList}}
    <div
      class="ant-layout-content"
      style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
    >
      <div class="style_container__2hI6B" style="padding: 0px;">
        <el-table :data="gradeList.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
          <el-table-column label="班级名">
            <template slot-scope="scope">
              <span>{{ scope.row.grade_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="课程名">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.subject_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="教室号">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.room_text }}</span>
            </template>
          </el-table-column> 
          <el-table-column label="阅卷状态">
            <template slot-scope="scope">
              <span size="medium">未阅</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">批卷</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="gradeList.length">
    </el-pagination>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    //获取数据
    ...mapState({
      gradeList: state=>state.grade.gradeList,
      studentPageList: state=>state.detail.studentPageList
    })
  },
  data() {
    return {
        currentPage: 1,
        pageSize: 10
    };
  },
  methods: {
    ...mapActions({
      getGrade: "grade/getGrade",
      getStudentPage: "detail/getStudentPage"
    }),
       handleDelete(index, row) {
        console.log(index, row);
        let grade_id=row.grade_id
        this.$router.push({path: "/paper/classmate",
        query: {
           grade_id
        }
       })
      },
      handleSizeChange(val){
        this.pageSize=val
      },
      handleCurrentChange(val){
         this.currentPage=val
      }
  },
  mounted() {
    this.getGrade()
    this.getStudentPage(this.$route.query.exam_student_id)
  }
};
</script>

<style lang="scss" scoped>
.ant-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0 24px 24px;
  h2 {
    padding: 20px 0;
    margin: 10px 0 10.5px;
    font-size: 21px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    height: 71px;
  }
  .ant-layout-content {
    flex: auto;
    min-height: 0;
  }
}
.style_container__2hI6B {
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  margin: 0 0 20px;
}
.style_buttons__z2xtt {
  height: 40px;
  margin: 0 0 25px;
}
.ant-btn-primary {
  width: 158px;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(-90deg, #4e75ff, #0139fd);
}
</style>