import React from 'react';
import reduxMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import App from './App';

jest.mock('../Page/Page', () => 'Page');
jest.mock('../../utils/log', () => ({
  info: () => {},
}));

const mockStore = reduxMockStore([]);
const store = mockStore();
const setAppIdle = jest.fn();

const props = {
  setAppIdle,
  store,
  appState: {
    appIdle: false,
  },
};

describe('App', () => {
  beforeEach(() => {
    setAppIdle.mockClear();

    global.performance = { now: () => {} };
  });

  it('should render correctly', () => {
    const component = renderer.create(<App {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('should setAppIdle on mount', () => {
    mount(<App {...props} />);

    expect(setAppIdle).toHaveBeenCalledTimes(1);
  });

  it('should render className appHasMounted when appIdle', () => {
    const newProps = {
      ...props,
      appState: {
        appIdle: true,
      },
    };

    const component = shallow(<App {...newProps} />);
    const wrapper = component.find('div');

    expect(wrapper).toHaveClassName('appHasMounted');
  });
});
