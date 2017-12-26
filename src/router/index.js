import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/template/Home'], resolve)
const About = resolve => require(['@/views/template/About'], resolve)
const Template = resolve => require(['@/views/template/TemplateDetail'], resolve)
const Package = resolve => require(['@/views/template/Package'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/templates/:id',
        component: Template
    },
    {
        path: '/package',
        component: Package
    }
]

const APP_NAME = '云设'

function getTitle(title) {
    if (title) {
        return title + ' - ' + APP_NAME
    } else {
        return APP_NAME
    }
}

let router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
