

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case "SET_SUBMITTED":
      return {
        ...state,
        isSubmitted: true,
      };

    case "SET_ERROR":
      return {
        ...state,
        [action.errorField]: action.errorMessage,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        [action.errorField]: "",
      };
    default:
      return state;
  }
};

export default formReducer;
