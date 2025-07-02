const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      const updatedState = {
        ...state,
        [action.field]: action.value,
      };

      const isNameValid = updatedState.name.length > 3;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        updatedState.email
      );
      const isMessageValid = updatedState.massage.length > 5;

      return {
        ...updatedState,
        isValid: isNameValid && isEmailValid && isMessageValid,
      };
    }
    case "RESET":
      return {
        name: "",
        email: "",
        subject: "",
        estimatedBudget: "",
        massage: "",
        isValid: false,
      };
    default: {
      return state;
    }
  }
};

export default formReducer;