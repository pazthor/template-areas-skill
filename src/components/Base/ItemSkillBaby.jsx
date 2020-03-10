import React from "react";
import ItemSkillStyled from "./ItemSkillStyled";
import Line from "./Line";
import DescriptionItem from "./DescriptionItem";
import ButtonItem from "./ButtonItem";
import ItemText from "./ItemText";

const ItemSkillBaby = ({state, disabled, uncomplete}) => {
  const tittleButton = state === '0'? 'Complete': state === '1'? 'Uncompleted': 'Not answered'
  return (
    <>
      <ItemSkillStyled>
        <DescriptionItem>
          
          <ItemText bold>Babbies like imitating Conversation.</ItemText>
          
          <ItemText >Usually achieved by 2-4 mounts.</ItemText>
        </DescriptionItem>

        <ButtonItem uncomplete={uncomplete} disabled={disabled} > {tittleButton}</ButtonItem>
      </ItemSkillStyled>
    </>
  );
};

export default ItemSkillBaby;
