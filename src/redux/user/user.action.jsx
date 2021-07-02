export const setCurrentUser = (user) => ({
  // This type must be exactly the same as our action.type in our reducer.
  type: "SET_CURRENT_USER",
  payload: user,
});
