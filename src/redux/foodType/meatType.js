import fetchRecipe from '../../API/fetchRecipeAPI';

const ADD = 'ADD';
const initialState = [];

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      return [...state, payload];
    default: return state;
  }
}

export const addMeatData = (meatType) => async (dispatch) => {
  const data = await fetchRecipe(meatType).then((response) => response);
  dispatch({
    type: ADD,
    payload: { meatType, hits: data },
  });
};
