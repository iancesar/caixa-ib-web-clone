import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'
import Main from '@/templates/Main'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Teste',
            component: Main,
            children: [{
                path: '/',
                component: HelloWorld
            }]

        }
    ]
})