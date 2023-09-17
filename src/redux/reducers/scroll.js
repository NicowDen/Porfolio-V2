const INITIAL_STATE = {
  scrollPosition: 0,
};

const scrollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SCROLL_POSITION":
      return { ...state, scrollPosition: action.payload.scrollPosition };

    default: {
      return state;
    }
  }
};

export default scrollReducer;
