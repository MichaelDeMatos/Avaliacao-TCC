import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list-alunos',
    component: () => import('../views/ListAlunos.vue'),
  },
  {
    path: '/avaliarAluno',
    name: 'form-avaliacao',
    component: () => import('../views/FormAvaliacao.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
