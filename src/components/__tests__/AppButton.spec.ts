import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import AppButton from '../AppButton.vue';

describe('AppButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(AppButton, { propsData: { text: 'text' } });
  });

  it('have default type button', async () => {
    expect(wrapper.props().type).toBe('button');
  });

  it('triggers a click', async () => {
    await wrapper.findComponent('button').trigger('click', { id: 3 });

    expect(wrapper.emitted().click[0]).toEqual([]);
  });
});
