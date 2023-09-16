

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: [...state.data, action.payload] };
    case "SET_API":
      return {
        ...state,
        api: action.payload,
      };
    case "SET_DETAIL_DATA":
      return {
        ...state,
        detailData: action.payload,
      };
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
