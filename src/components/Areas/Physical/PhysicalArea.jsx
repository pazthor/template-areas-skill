import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {getPhysicalData, updateMilestoneButton} from '../../../redux/actions'

import AreaHeader from "../../Base/AreaHeader";
import AreaBody from "../../Base/AreaBody";
import WrapperArea from "../../Base/WrapperArea";
import WrapperSection from "../../Base/WrapperSection";
import redirecTo from "../../../utils/redirect";
import { TOKEN } from "../../../utils/Constants";

const PhysicalArea = ({getPhysicalData, id, description, titleHeader, milestones, updateMilestoneButton}) => {
  const physicalAreaColor = "#1FADDF";
  
  const handleOnChangeButton = (id, state) => {
    
    updateMilestoneButton(id, state);
  }
  

  useEffect(() => {
    if(milestones.length === 0 ) getPhysicalData(TOKEN);
    
  }, [])
  return (
    <>

      <WrapperArea>
        <WrapperSection>
        
          <AreaHeader
            color={physicalAreaColor}
            isActivePhysical={true}
            isActiveSocial={false}
            onClickSocial={() => {
              redirecTo("social-emocional");
            }}
            onClickPhysical={() => {
              redirecTo("/physical");
            }}
            titleSkillText={titleHeader}
            bodySkillText={description}
          ></AreaHeader>
          
          
          <AreaBody milestones={milestones} onChangeButton={handleOnChangeButton} pathRedirect="/social-emocional" titleButtonNext='Next' ></AreaBody>
          
        </WrapperSection>
      </WrapperArea>
    </>
  );
};


const mapStateToProps = state => {
  return {
    id: state.physicalMilestones.id,
    description: state.physicalMilestones.description,
    titleHeader: state.physicalMilestones.title,
    milestones: state.physicalMilestones.milestones
  };
};

const mapDispatchToProps = {
  getPhysicalData,
  updateMilestoneButton
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalArea);
