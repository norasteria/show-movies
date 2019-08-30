const initialState = {
  moviesData: [],
  totalData: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADER":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_MOVIES_DATA":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
