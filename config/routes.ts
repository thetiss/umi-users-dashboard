export default [
    { path: '/login', component: '@/pages/AccountLogin' },
    // { path: '/staff', component: '@/pages/staff' }
    { 
        path: '/', 
        component: '@/pages/index',
        wrappers: ['@/wrappers/auth'],
        routes: [
            { path: '/staff', component: '@/pages/staff' }
        ]
    },
    // { 
    //     path: '/staff', 
    //     component: '@/pages/staff',
    //     wrappers: ['@/wrappers/auth']
    // },    
]