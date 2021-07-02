const INITIAL_STATE = {
  currentUser: null,
};

// If state is undefined, use INITIAL_STATE as default value.
// This is ES6 syntax. Note: null is a value.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        // Always spread out the state, before setting the state with a payload.
        // This ensures re-rendering, since we are passing object.
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
