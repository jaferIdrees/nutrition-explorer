export default function fetchRecipe(choices) {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=4b94946d&app_key=f1bc8715f5dc4ca37ffe7768a0103e1d&${choices}`)
    .then((response) => response.json());
}
