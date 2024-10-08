import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Vistas HomeView y AboutView', () => {
  it('Probando existencia de vista AboutView', async () => {
    router.push('/about');
    await router.isReady(); // Espera a que el router esté listo

    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});

