const INITIAL_STATE = {
  aboutMe: true,
  skills: false,
  background: false,
  projects: false,
};

const rubricsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ABOUT_ME_ON":
      return {
        ...state,
        aboutMe: true,
        skills: false,
        background: false,
        projects: false,
      };
    case "SKILLS_ON":
      return {
        ...state,
        aboutMe: false,
        skills: true,
        background: false,
        projects: false,
      };
    case "BACKGROUND_ON":
      return {
        ...state,
        aboutMe: false,
        skills: false,
        background: true,
        projects: false,
      };
    case "PROJECTS_ON":
      return {
        ...state,
        aboutMe: false,
        skills: false,
        background: false,
        projects: true,
      };

    default: {
      return state;
    }
  }
};

export default rubricsReducer;
