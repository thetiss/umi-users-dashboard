export default [
    { path: '/login', component: '@/pages/AccountLogin' },
    { 
        path: '/', 
        component: '@/pages/index',
        wrappers: ['@/wrappers/auth'],
        routes: [
            { path: '/staff', component: '@/pages/staff' }
        ]
    }
]