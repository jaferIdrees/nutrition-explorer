import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecipesList from './pages/RecipesList';
import RecipePage from './pages/RecipePage';
import { retrieveCategory } from './redux/foodType/mainCategory';

const categories = [
  'Beef',
  'Lamb',
  'Chicken',
  'Turkey',
  'Venison',
  'Duck',
  'Bison',
  'Goose',
  'Rabbit',
  'Pheasant',
];

function App() {
  const categoriesState = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesState.length === 0) {
      for (let i = 0; i < categories.length; i += 1) {
        dispatch(retrieveCategory(categories[i]));
      }
    }
  });
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recipes" element={<RecipesList />} />
      <Route path="/recipes/details" element={<RecipePage />} />
    </Routes>
  );
}

export default App;
