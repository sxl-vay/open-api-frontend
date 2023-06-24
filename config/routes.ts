export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'}],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {path: '/echart', name: 'echart', icon: 'smile', component: './echart'},
  {path: '/echart3', name: 'echart3', icon: 'smile', component: './echart3'},
  {name: '记账本', icon: 'table', path: '/admin/interface', component: './Bookkeeping'},
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {name: '接口管理', icon: 'table', path: '/admin/interface', component: './Bookkeeping'},
  //   ],
  // },
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
