const INITIAL_STATE = {
  aboutMe: true,
  softSkills: false,
  background: false,
  projects: false,
};

const rubricsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ABOUT_ME_ON":
      return {
        ...state,
        aboutMe: true,
        softSkills: false,
        background: false,
        projects: false,
      };
    case "SOFT_SKILLS_ON":
      return {
        ...state,
        aboutMe: false,
        softSkills: true,
        background: false,
        projects: false,
      };
    case "BACKGROUND_ON":
      return {
        ...state,
        aboutMe: false,
        softSkills: false,
        background: true,
        projects: false,
      };
    case "PROJECTS_ON":
      return {
        ...state,
        aboutMe: false,
        softSkills: false,
        background: false,
        projects: true,
      };

    default: {
      return state;
    }
  }
};

export default rubricsReducer;
