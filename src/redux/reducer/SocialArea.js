import { UPDATE_BUTTON, ADD_MILESTONES } from "../actionTypes";

const initialState = {
  id:null,
  title: '',
  description: '',
  milestones: []
};

export default function(state = initialState, action) {
  switch (action.type) {
   
    case ADD_MILESTONES: {
      const { id, milestones, title, description } = action.payload;
      return {
        ...state,
        id: id,
        title: title,
        description: description,
        milestones: milestones, // [ with objects]
          
        }
      };
    
    case UPDATE_BUTTON:{
      const {id, answer, title, description} = action.payload;
      // search object by Id : dto = search(id)
      // remoe id from array and add new id

      return {
        ...state,
        milestone:[...state.milestones, id]
      }

    }

    default:
      return state;
  }
}
