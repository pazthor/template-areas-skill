import React from "react";
import AreaHeaderStyled from "./AreaHeaderStyled";
import Button from "./Button";
import PillStyled from "./PillStyled";
import TitleAreas from "./TitleAreas";
import Line from "./Line";
import TitleSkill from "./TitleSkill";
import BodySkill from "./BodySkill";

const AreaHeader = ({ color }) => {
  return (
    <>
      <AreaHeaderStyled color={color}>
        <TitleAreas>Areas</TitleAreas>
        <PillStyled id="pildora">
          <Button pillLeft isActive color={color}>
            Physical
          </Button>
          <Button pillRight color={color}>
            Social & Emotional
          </Button>
        </PillStyled>
        <Line color='white'  width='40%'/>                                     
      
       
        <TitleSkill>
        Skill: Standing up
        </TitleSkill>

        <BodySkill>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            debitis incidunt expedita sit eius cumque! Iure qui obcaecati odio
            ducimus rem ex facilis laudantium ullam officia! Magnam eos vitae
            ullam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            debitis incidunt expedita sit eius cumque! Iure qui obcaecati odio
            ducimus rem ex facilis laudantium ullam officia! Magnam eos vitae
            ullam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            debitis incidunt expedita sit eius cumque! Iure qui obcaecati odio
            ducimus rem ex facilis laudantium ullam officia! Magnam eos vitae
            ullam?
          
        </BodySkill>        
      </AreaHeaderStyled>
    </>
  );
};

export default AreaHeader;
