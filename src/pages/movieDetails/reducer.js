const initialState = {
  content: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_DETAILS":
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
