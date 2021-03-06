import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  // {
  //   path: '/grades',
  //   component: Layout,
  //   redirect: '/grades/grade',
  //   name: 'grades',
  //   meta: {
  //     title: '班级管理',
  //     icon: 'tree-table'
  //   },
  //   children: [
  //     {
  //       path: 'grade',
  //       component: () => import('@/views/grades/grade'),
  //       name: 'grade',
  //       meta: { title: '班级管理' }
  //     },
  //     {
  //       path: 'room',
  //       // component: () => import('@/views/excel/select-excel'),
  //       name: 'room',
  //       meta: { title: '教室管理' }
  //     },
  //     {
  //       path: 'student',
  //       // component: () => import('@/views/excel/merge-header'),
  //       name: 'student',
  //       meta: { title: '学生管理' }
  //     }
  //   ]
  // },
  
  // {
  //   path: '/management',
  //   component: Layout,
  //   redirect: '/management/Add',
  //   // alwaysShow: true,
  //   name: 'Management',
  //   meta: { title: '用户管理', icon: 'user' },
  //   children: [
  //     {
  //       path: 'Adduser',
  //       component: () => import('@/views/management/add_user'),
  //       name: 'Add',
  //       meta: { title: '添加用户' }
  //     },
  //     {
  //       path: 'listUser',
  //       component: () => import('@/views/management/list-user'),
  //       name: 'List',
  //       meta: { title: '用户展示' }
  //     }
  //   ]
  // },
  // {
  //   path: '/questions',
  //   component: Layout,
  //   name: 'Questions',
  //   meta: { title: '试题管理', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'add-questions',
  //       component: () => import('@/views/questions/add-questions'),
  //       name: 'Addquestions',
  //       meta: { title: '添加考试' }
  //     },
  //     {
  //       path: 'classify-questions',
  //       component: () => import('@/views/questions/classify-questions'),
  //       name: 'classifyQuestions',
  //       meta: { title: '考试分类' }
  //     },
  //     {
  //       path: 'examine-questions',
  //       component: () => import('@/views/questions/examine-questions'),
  //       name: 'ExamineQuestions',
  //       meta: { title: '查看试题' }
  //     },
  //     {
  //       path: 'update-questions',
  //       component: () => import('@/views/questions/update-questions'),
  //       hidden: true,
  //       name: 'UpdateQuestions',
  //       meta: { title: '编辑试题' }
  //     },
  //     {
  //       path: 'questions-detail',
  //       component: () => import('@/views/questions/questions-detail'),
  //       hidden: true,
  //       name: 'questionsDetail',
  //       meta: { title: '试题详情' }
  //     }
  //   ]
  // },
  // {
  //   path: '/examination',
  //   component: Layout,
  //   redirect: '/examination/addTest',
  //   name: 'Examination',
  //   meta: {
  //     title: '考试管理',
  //     icon: 'skill'
  //   },
  //   children: [{
  //     path: 'addTest',
  //     component: () => import('@/views/examination/addTest'),
  //     meta: { title: '添加考试' }
  //   },
  //   {
  //     path: 'examList',
  //     component: () => import('@/views/examination/examList'),
  //     meta: { title: '试卷列表' }
  //   },
  //   {
  //     path: 'detailTest',
  //     component: () => import('@/views/examination/detailTest')
  //   },
  //   {
  //     path: 'createTest',
  //     component: () => import('@/views/examination/createTest')
  //   }]
  // },
  // {
  //   path: '/grades',
  //   component: Layout,
  //   redirect: '/grades/grade',
  //   name: 'grades',
  //   meta: {
  //     title: '班级管理',
  //     icon: 'tree-table'
  //   },
  //   children: [
  //     {
  //       path: 'grade',
  //       component: () => import('@/views/grades/grade'),
  //       name: 'grade',
  //       meta: { title: '班级管理' }
  //     },
  //     {
  //       path: 'room',
  //       component: () => import('@/views/grades/room'),
  //       name: 'room',
  //       meta: { title: '教室管理' }
  //     },
  //     {
  //       path: 'student',
  //       component: () => import('@/views/grades/student'),
  //       name: 'student',
  //       meta: { title: '学生管理' }
  //     }
  //   ]
  // },
  // {
  //   path: '/paper',
  //   component: Layout,
  //   redirect: '/paper/classlist',
  //   name: 'paper',
  //   alwaysShow: true,
  //   meta: {
  //     title: '阅卷管理',
  //     icon: 'tree-table'
  //   },
  //   children: [
  //     {
  //       path: 'classlist',
  //       component: () => import('@/views/paper/classlist'),
  //       name: 'classlist',
  //       meta: { title: '待批班级' }
  //     },
  //     {
  //       path: 'classmate',
  //       component: () => import('@/views/paper/classmate'),
  //       name: 'classmate'
  //     },
  //     {
  //       path: 'detail',
  //       component: () => import('@/views/paper/detail'),
  //       name: 'detail'
  //     }
  //   ]
  // },
  // {
  //   path: '/management',
  //   component: Layout,
  //   redirect: '/management/Add',
  //   // alwaysShow: true,
  //   name: 'Management',
  //   meta: { title: '用户管理', icon: 'user' },
  //   children: [
  //     {
  //       path: 'Adduser',
  //       component: () => import('@/views/management/add_user'),
  //       name: 'Add',
  //       meta: { title: '添加用户' }
  //     },
  //     {
  //       path: 'listUser',
  //       component: () => import('@/views/management/list-user'),
  //       name: 'List',
  //       meta: { title: '用户展示' }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      }
    ]
  },
  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'mergeHeader' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'pdf', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/i18n-demo/index'),
        name: 'I18n',
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'externalLink', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const authorityRoutes = [
  {
    path: '/questions',
    component: Layout,
    name: 'Questions',
    redirect: '/questions/add-questions',
    meta: { title: '试题管理', icon: 'zip' },
    children: [
      {
        path: 'add-questions',
        component: () => import('@/views/questions/add-questions'),
        name: 'Addquestions',
        meta: { title: '添加考试',view_id: "main-addQuestions" }
      },
      {
        path: 'classify-questions',
        component: () => import('@/views/questions/classify-questions'),
        name: 'classifyQuestions',
        meta: { title: '考试分类',view_id: "main-questionsType" }
      },
      {
        path: 'examine-questions',
        component: () => import('@/views/questions/examine-questions'),
        name: 'ExamineQuestions',
        meta: { title: '查看试题',view_id: "main-watchQuestions" }
      },
      {
        path: 'update-questions',
        component: () => import('@/views/questions/update-questions'),
        hidden: true,
        name: 'UpdateQuestions',
        meta: { title: '编辑试题',view_id: "main-editQuestions" }
      },
      {
        path: 'questions-detail',
        component: () => import('@/views/questions/questions-detail'),
        hidden: true,
        name: 'questionsDetail',
        meta: { title: '试题详情',view_id: "main-questionsDetail" }
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/management/Add',
    // alwaysShow: true,
    name: 'Management',
    meta: { title: 'management', icon: 'user' },
    children: [
      {
        path: 'Adduser',
        component: () => import('@/views/management/add_user'),
        name: 'Add',
        meta: { title: 'add',view_id: "main-addUser" }
      },
      {
        path: 'listUser',
        component: () => import('@/views/management/list-user'),
        name: 'List',
        meta: { title: '用户展示',view_id: "main-showUser" }
      }
    ]
  },
  {
    path: '/examination',
    component: Layout,
    redirect: '/examination/addTest',
    name: 'Examination',
    meta: {
      title: '考试管理',
      icon: 'skill'
    },
    children: [{
      path: 'addTest',
      component: () => import('@/views/examination/addTest'),
      meta: { title: '添加考试' ,view_id: "main-addExam"}
    },
    {
      path: 'examList',
      component: () => import('@/views/examination/examList'),
      meta: { title: '试卷列表',view_id: "main-questionsDetail" }
    },
    {
      path: 'detailTest',
      component: () => import('@/views/examination/detailTest'),
      hidden: true,
      meta: { title: '' ,view_id: "main-examinationPapersssss"},
    },
    {
      path: 'createTest',
      component: () => import('@/views/examination/createTest'),
      hidden: true,
      meta: { title: '' ,view_id: "main-menu"}
    }]
  },
  {
    path: '/grades',
    component: Layout,
    redirect: '/grades/grade',
    name: 'grades',
    meta: {
      title: '班级管理',
      icon: 'tree-table'
    },
    children: [
      {
        path: 'grade',
        component: () => import('@/views/grades/grade'),
        name: 'grade',
        meta: { title: '班级管理',view_id: "main-grade" }
      },
      {
        path: 'room',
        component: () => import('@/views/grades/room'),
        name: 'room',
        meta: { title: '教室管理' ,view_id: "main-room"}
      },
      {
        path: 'student',
        component: () => import('@/views/grades/student'),
        name: 'student',
        meta: { title: '学生管理' ,view_id: "main-student"}
      }
    ]
  },
  {
    path: '/paper',
    component: Layout,
    redirect: '/paper/classlist',
    name: 'paper',
    alwaysShow: true,
    meta: {
      title: '阅卷管理',
      icon: 'tree-table'
    },
    children: [
      {
        path: 'classlist',
        component: () => import('@/views/paper/classlist'),
        name: 'classlist',
        meta: { title: '待批班级' ,view_id: "main-examPaperClassList"}
      },
      {
        path: 'classmate',
        component: () => import('@/views/paper/classmate'),
        hidden:true,
        meta: { view_id: "main-examPaperClassmate"}
      },
      {
        path: 'detail',
        component: () => import('@/views/paper/detail'),
        hidden:true,
        meta: { view_id: "main-examinationPapers"}
      },
    ]
  }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
