import fetchCategory from '../../API/fetchNutritionAPI';
// import fetchRecipe from '../../API/fetchRecipeAPI';

function arrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len > 0) {
    len -= 1;
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function arrayMax(arr) {
  let len = arr.length; let
    max = -Infinity;
  while (len > 0) {
    len -= 1;
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

// Actions
const RETRIEVE_CATEGRIES = 'RETRIEVE_CATEGRIES';
// const REMOVE = 'REMOVE';
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_CATEGRIES:
    {
      const newState = [...state, payload];
      if (state.map((item) => item.name).includes(payload.name)) return state;
      return newState;
    }
    /* case REMOVE: return [
      ...state.filter((book) => (book.id !== action.bookID)),
    ]; */
    default: return state;
  }
}

export const retrieveCategory = (category) => async (dispatch) => {
  try {
    const data = await fetchCategory(category).then((response) => response);
    const maxCal = arrayMax(data.hits.map((dataItem) => Number(dataItem.fields.nf_calories)));
    const minCal = arrayMin(data.hits.map((dataItem) => Number(dataItem.fields.nf_calories)));
    const maxFat = arrayMax(data.hits.map((dataItem) => Number(dataItem.fields.nf_total_fat)));
    const minFat = arrayMin(data.hits.map((dataItem) => Number(dataItem.fields.nf_total_fat)));
    const result = {
      name: category,
      maxCalories: maxCal,
      minCalories: minCal,
      maxTotalFat: maxFat,
      minTotalFat: minFat,
      hits: data.hits,
    };
    dispatch({
      type: RETRIEVE_CATEGRIES,
      payload: result,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
};
