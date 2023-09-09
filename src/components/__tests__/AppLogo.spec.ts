import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import router from '@/router';

import AppLogo from '../AppLogo.vue';

describe('AppLogo', () => {
  let wrapper: VueWrapper;

  beforeEach(async () => {
    wrapper = mount(AppLogo, { global: { plugins: [router] } });
  });

  it('renders site name', async () => {
    expect(wrapper.text()).toContain('instinct.');
  });

  it('redirects to home page on click', async () => {
    const push = vi.spyOn(router, 'push');
    await wrapper.trigger('click');

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
  });
});
