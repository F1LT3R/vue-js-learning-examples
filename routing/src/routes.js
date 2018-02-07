import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserProps from './components/user/UserProps.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/user/:id', component: User },
    { path: '/user_props/:id', component: UserProps, props: true },
    { path: '/user_nest', component: User,
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
]