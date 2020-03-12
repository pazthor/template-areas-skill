import { UPDATE_BUTTONSOCIAL, ADD_MILESTONESSOCIAL } from "../actionTypes";

const initialState = {
  id: null,
  title: "",
  description: "",
  milestones: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MILESTONESSOCIAL: {
      const { id, milestones, title, description } = action.payload;
      return {
        ...state,
        id: id,
        title: title,
        description: description,
        milestones: milestones // [ with objects]
      };
    }

    case UPDATE_BUTTONSOCIAL: {
      const { id, answer } = action.payload;
      let object = state.milestones.find(el => el.id === id);
      const newArray = state.milestones.filter(x => x.id !== id);
      object.answer = object.answer === null ? false : !answer;

      return {
        ...state,
        milestones: [...newArray, object]
      };
    }

    default:
      return state;
  }
}
