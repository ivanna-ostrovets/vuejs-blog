import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppError from '../AppError.vue';

describe('AppError', () => {
  it('renders properly if error provided', () => {
    const wrapper = mount(AppError, { propsData: { error: 'Test Error' } });
    expect(wrapper.text()).toContain('Error: Test Error');
  });

  it('does not render if error is not provided', () => {
    const wrapper = mount(AppError, { propsData: { error: undefined } });
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
  });
});
