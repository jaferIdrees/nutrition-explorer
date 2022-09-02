import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Category from '../components/Category';
import RecipePage from '../pages/RecipePage';
import store from '../redux/configureStore';
import { recipe } from '../API/recipeForTesting';

const category = {
  name: 'test category',
  maxCalories: 100,
  mixCalories: 0,
  maxTotalFat: 100,
  minTotalFat: 0,
  image: 'test',
};

test('loads and displays a Catyegory', async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Category category={category} />
      </BrowserRouter>
    </Provider>,
  );

  // ACT
  /* await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading'); */

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('test category');
  expect(screen.getByRole('button')).toBeEnabled();
});

test('loads and displays a Recipe page', async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{ state: { recipe: { recipe } } }]}>
        <RecipePage state={recipe} />
      </MemoryRouter>
    </Provider>,
  );

  // ACT
  /* await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading'); */

  // ASSERT
  expect(screen.getByText('Horseradish Sauce')).toHaveTextContent('Horseradish Sauce');
  expect(screen.getByText('Calories')).toHaveTextContent('Calories');
});
