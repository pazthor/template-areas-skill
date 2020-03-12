import { ADD_MILESTONES, UPDATE_BUTTON, UPDATE_BUTTONSOCIAL, ADD_MILESTONESSOCIAL } from "./actionTypes";
import { FetchGet } from "../utils/fetchGet";
import { URLS } from "../utils/URLS";

export const getPhysicalData = token => async dispatch => {
  // get action
  FetchGet(URLS.PHYSICAL, token)
    .then(res => {
      
      dispatch({
        type: ADD_MILESTONES,
        payload: res.data.skill
      });
    })
    .catch(err => console.log(err));
};

export const getSocialData = token => async dispatch => {
    // get action
    FetchGet(URLS.SOCIAL, token)
    .then(res => {      
      dispatch({
        type: ADD_MILESTONESSOCIAL,
        payload: res.data.skill
      });
    })
    .catch(err => console.log(err));
}

export const updateMilestoneButton = (id, answer) => dispatch => {
  dispatch({
    type: UPDATE_BUTTON,
    payload: {id, answer}
  });
};

export const updateMilestoneButtonSocial = (id, answer) => dispatch => {
  dispatch({
    type: UPDATE_BUTTONSOCIAL,
    payload: {id, answer}
  });
};
