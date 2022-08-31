const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a38d3aa7f4msh21e34295678ed47p16f9d2jsnf21dedcf111f',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
  },
};

export default function fetchRecipe(item) {
  return fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${item}`, options)
    .then((response) => response.json());
}
