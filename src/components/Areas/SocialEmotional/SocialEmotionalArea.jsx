import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {getSocialData, updateMilestoneButtonSocial} from '../../../redux/actions'
import AreaHeader from "../../Base/AreaHeader";
import AreaBody from "../../Base/AreaBody";
import WrapperSection from "../../Base/WrapperSection";
import WrapperArea from "../../Base/WrapperArea";
import redirecTo from "../../../utils/redirect";
import { TOKEN } from "../../../utils/Constants";
const SocialEmotionalArea = ({getSocialData, id, description, titleHeader, milestones, updateMilestoneButtonSocial}) => {
  const SocialAreaColor = "#D43571";

  const handleOnChangeButton = (id, state) => {
    
    updateMilestoneButtonSocial(id, state);
  }

  useEffect(() => {
    if(milestones.length === 0 ) getSocialData(TOKEN);
    
  }, [])
  return (
    <>
      <WrapperArea>
        <WrapperSection>
          <AreaHeader
            color={SocialAreaColor}
            isActivePhysical={false}
            isActiveSocial={true}
            onClickSocial={() => {
              redirecTo("/social-emocional");
            }}
            onClickPhysical={() => {
              redirecTo("/physical");
            }}
            titleSkillText={titleHeader}
            bodySkillText={description}
          ></AreaHeader>
          <AreaBody milestones={milestones} onChangeButton={handleOnChangeButton} pathRedirect="/physical" titleButtonNext='Finish assessment' ></AreaBody>
        </WrapperSection>
      </WrapperArea>
    </>
  );
};


const mapStateToProps = state => {
  return {
    id: state.SocialArea.id,
    description: state.SocialArea.description,
    titleHeader: state.SocialArea.title,
    milestones: state.SocialArea.milestones
  };
};

const mapDispatchToProps = {
  getSocialData,
  updateMilestoneButtonSocial
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialEmotionalArea);