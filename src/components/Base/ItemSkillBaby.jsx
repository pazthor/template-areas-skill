import React from "react";
import ItemSkillStyled from "./ItemSkillStyled";
import DescriptionItem from "./DescriptionItem";
import ButtonItem from "./ButtonItem";
import ItemText from "./ItemText";

const ItemSkillBaby = ({ id, title, description, answer, onChangeButton }) => {
  const NOTANSWER = "Not answered";
  const UNCOMPLETED = "Uncompleted";
  const COMPLETED = "Completed";
  const tittleButton =
    answer === null ? NOTANSWER : answer === false ? UNCOMPLETED : COMPLETED;
  const backgroundColor = tittleButton === NOTANSWER ? "gainsboro" : tittleButton === UNCOMPLETED? "gainsboro":"#75B753";
  const color =
    tittleButton === NOTANSWER
      ? "gray"
      : tittleButton === UNCOMPLETED
      ? "#75B753"
      : "white";
  return (
    <>
      <ItemSkillStyled>
        <DescriptionItem>
          <ItemText bold>{title}</ItemText>

          <ItemText>{description}</ItemText>
        </DescriptionItem>

        <ButtonItem
          uncomplete={answer}
          backgroundColor={backgroundColor}
          color={color}
          onClick={() => onChangeButton(id, answer )}
        >
          {" "}
          {tittleButton}
        </ButtonItem>
      </ItemSkillStyled>
    </>
  );
};

export default ItemSkillBaby;
