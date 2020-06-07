import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

let component;

const getDataById = (dataId) => component.find(`[data-id="${dataId}"]`);

describe('Product', () => {
  it('should render', () => {
    component = mount(<Product product={product} />);
    expect(getDataById('product').length).toBe(1);
  });
  it('should init with amount 0', () => {
    component = mount(<Product product={product} />);
    expect(getDataById('product-amount').text()).toBe('0');
  });
  it('should increment amount', () => {
    component = mount(<Product product={product} />);
    getDataById('product-increment').simulate('click');
    expect(getDataById('product-amount').text()).toBe('1');
  });
  it('should decrement amount', () => {
    component = mount(<Product product={product} amount={1} />);
    getDataById('product-decrement').simulate('click');
    expect(getDataById('product-amount').text()).toBe('0');
  });
  it('should not decrement bellow zero', () => {
    getDataById('product-decrement').simulate('click');
    expect(getDataById('product-amount').text()).toBe('0');
  });
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
});
