import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { v4 as uuidv4 } from 'uuid';
import RecipeRow from '../components/RecipeRow';

function RecipesList() {
  const location = useLocation();
  const { meatType, cuisine } = location.state;
  console.log(meatType, cuisine[0]);
  const recipes = useSelector((state) => state.recipes);
  const meatTypeRecipe = recipes.filter((recipe) => recipe.meatType === meatType);
  console.log(meatTypeRecipe[0].hits.hits[0].recipe.cuisineType[0]);
  const selectedRecipes = meatTypeRecipe[0].hits.hits.filter(
    (recipe) => recipe.recipe.cuisineType[0] === cuisine[0],
  );
  meatTypeRecipe[0].hits.hits.map(
    (recipe) => console.log(recipe.recipe.cuisineType),
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {selectedRecipes && (
        <div className="ms-auto me-auto" style={{ maxWidth: '40rem' }}>
          {selectedRecipes.map((recipe) => (
            <RecipeRow
              key={uuidv4()}
              label={recipe.recipe.label}
              image={recipe.recipe.images.THUMBNAIL}
              dietLabels={recipe.recipe.dietLabels}
              cautions={recipe.recipe.cautions}
              recipe={recipe}
            />
          ))}
        </div>
        )}
      </ThemeProvider>
    </>
  );
}

export default RecipesList;
