import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import router, { Routes } from '@/router';

import AppRouterLink from '../AppRouterLink.vue';

describe('AppRouterLink', () => {
  it('renders provided text', async () => {
    const wrapper = mount(AppRouterLink, {
      propsData: { path: Routes.tags, text: 'test text' },
      global: { plugins: [router] },
    });
    expect(wrapper.text()).toContain('test text');
  });

  it('redirects to path on click', async () => {
    const wrapper = mount(AppRouterLink, {
      propsData: { path: Routes.tags, text: 'test text' },
      global: { plugins: [router] },
    });
    const push = vi.spyOn(router, 'push');
    await wrapper.trigger('click');

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(Routes.tags);
  });
});
