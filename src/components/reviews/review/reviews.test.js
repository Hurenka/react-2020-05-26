import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from '../reviews';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  let component, name, text, rate;

  beforeEach(() => {
    component = mount(<Review {...review} />);
    name = component.find('[data-id="review-user"]').text();
    text = component.find('[data-id="review-text"]').text();
    rate = component.find('[data-id="review-star"]').length;
  });
  it('should render', () => {
    expect(component.find('Review').length).toBe(1);
  });
  it('should render username', () => {
    expect(name).toBe(review.user);
  });
  it('should render text', () => {
    expect(text).toBe(review.text);
  });
  it('should render star', () => {
    expect(rate).toBe(review.rating);
  });
});
