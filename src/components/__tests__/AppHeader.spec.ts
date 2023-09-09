import { createTestingPinia } from '@pinia/testing';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import router from '@/router';

import AppHeader from '../AppHeader.vue';
import { testUser } from './__mocks__/user';

describe('AppHeader', () => {
  let wrapper: VueWrapper;

  beforeEach(async () => {
    wrapper = mount(AppHeader, {
      shallow: true,
      global: { plugins: [router, createTestingPinia()] },
    });
  });

  it('renders logo', async () => {
    expect(wrapper.findComponent({ name: 'AppLogo' }).exists()).toBe(true);
  });

  it('renders nav links', () => {
    const links = wrapper.findAllComponents({ name: 'AppRouterLink' });

    expect(links.length).toBe(3);
    expect(links[0].props().text).toBe('Home');
    expect(links[1].props().text).toBe('Tags');
    expect(links[2].props().text).toBe('About');
  });

  it('renders login button if no user logged in', () => {
    const loginButton = wrapper.findComponent({ name: 'AppButton' });

    expect(loginButton.exists()).toBe(true);
    expect(loginButton.props().text).toBe('Login');
  });

  it('redirects to login page on login button click', async () => {
    const push = vi.spyOn(router, 'push');
    await wrapper.findComponent({ name: 'AppButton' }).trigger('click');

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/login');
  });

  it('renders UserProfileMenu if user is logged in', async () => {
    wrapper = mount(AppHeader, {
      shallow: true,
      global: {
        plugins: [router, createTestingPinia({ initialState: { user: { user: testUser } } })],
      },
    });

    expect(wrapper.findComponent({ name: 'UserProfileMenu' }).exists()).toBe(true);
  });
});
