import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MainPage from '../pages/MainPage';

describe('Rockets component testing using snapshots', () => {
  it('Test Rockets component renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MainPage />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
