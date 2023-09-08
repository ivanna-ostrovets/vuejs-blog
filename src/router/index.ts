import { createRouter, createWebHistory } from 'vue-router';

import PostsView from '@/components/PostsView.vue';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import SearchView from '@/views/SearchView.vue';
import TagsView from '@/views/TagsView.vue';

export enum Routes {
  home = '/',
  post = '/post',
  login = '/login',
  tags = '/tags',
  about = '/about',
  search = '/search',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: Routes.home, name: 'Home', component: HomeView },
    { path: `${Routes.post}/:id`, name: 'PostView', component: PostsView, props: true },
    { path: Routes.login, name: 'Login', component: LoginView },
    { path: Routes.tags, name: 'Tags', component: TagsView },
    { path: Routes.about, name: 'About', component: AboutView },
    { path: Routes.search, name: 'Search', component: SearchView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
});

export default router;
