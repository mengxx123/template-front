import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/template/Home'], resolve)
const About = resolve => require(['@/views/template/About'], resolve)
const Template = resolve => require(['@/views/template/TemplateDetail'], resolve)

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
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
