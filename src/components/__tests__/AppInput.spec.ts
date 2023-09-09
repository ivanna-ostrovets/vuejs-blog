import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import AppInput from '../AppInput.vue';

describe('AppInput', () => {
  let wrapper: VueWrapper;

  beforeEach(async () => {
    wrapper = wrapper = mount(AppInput, {
      propsData: {
        placeholder: 'placeholder',
        autocomplete: 'autocomplete',
        modelValue: 'modelValue',
        'onUpdate:modelValue': e => wrapper.setProps({ modelValue: e }),
      },
      slots: { icon: 'slot icon' },
    });
  });

  it('have default type text', async () => {
    expect(wrapper.props().type).toBe('text');
  });

  it('modelValue should be updated', async () => {
    await wrapper.find('input').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  it('renders slots content', () => {
    expect(wrapper.html()).toContain('slot icon');
  });
});
