import { ADD_MILESTONES, UPDATE_BUTTON } from "./actionTypes";
import { FetchGet } from "../utils/fetchGet";
import { URLS } from "../utils/URLS";


export const getPhysicalData = token => async dispatch => {
  const objectPhysicalHeader = { id: 1, title: "algo", descripcion: "algo" };
  const objectPhysicalMilestones = {
    IdArea: 2,
    id: 1,
    title: "algo",
    descripcion: "algo",
    answer: null
  };
  // get action
  FetchGet(URLS.PHYSICAL, token)
    .then(res => {
      console.log(res)
      const id = res.data.skill.id
      const title = res.data.skill.title
      const description = res.data.skill.description

      const milestonesObject = res.data.skill.milestones
      dispatch({
        type: ADD_MILESTONES,
        payload: res.data.skill
      });

    })
    .catch(err => console.log(err));

  // update data Header
  
};
