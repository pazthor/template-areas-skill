import React from "react";
import AreaHeaderStyled from "./AreaHeaderStyled";
import Button from "./Button";
import PillStyled from "./PillStyled";
import TitleAreas from "./TitleAreas";

const AreaHeader = ({color}) => {
  return (
    <>
<AreaHeaderStyled color={color}>

        <TitleAreas>Areas</TitleAreas>
        <PillStyled id='pildora'>          
          <Button pillLeft isActive color={color}>
            Physical   
          </Button>
          <Button pillRight color={color}>
          Social & Emotional
          </Button>
        </PillStyled>
        <hr />
        <br />
     
        <div id='text'>
          <h4>Skill: Standing up</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            debitis incidunt expedita sit eius cumque! Iure qui obcaecati odio
            ducimus rem ex facilis laudantium ullam officia! Magnam eos vitae
            ullam?
          </p>
        </div>
      
   
</AreaHeaderStyled>
     
    </>
  );
};

export default AreaHeader;
