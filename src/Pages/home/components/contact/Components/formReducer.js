import validateField from "./validator";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.field]: action.value,
      }
    }
    case "RESET":
      return {
        name: "",
        email: "",
        subject: "",
        estimatedBudget: "",
        massage: "",
      };
    default: {
      return state;
    }
  }
};

export default formReducer;
