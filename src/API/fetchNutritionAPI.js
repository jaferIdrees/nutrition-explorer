export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a38d3aa7f4msh21e34295678ed47p16f9d2jsnf21dedcf111f',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
  },
};

export default function fetchNutritionAPI(category) {
  return fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${category}?fields=item_name%2Cnf_calories%2Cnf_total_fat`, options)
    .then((response) => response.json());
}
