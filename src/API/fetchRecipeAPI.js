export default function fetchRecipe(choice) {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${choice}&app_id=4b94946d&app_key=f1bc8715f5dc4ca37ffe7768a0103e1d&random=true`)
    .then((response) => response.json());
}
