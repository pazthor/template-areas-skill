import React from "react";
import AreaBodyStyled from "./AreaBodyStyled";
import ListSkillBabiesStyled from "./ListSkillBabiesStyled";
import ItemSkillBaby from "./ItemSkillBaby";
import ButtonNext from "./ButtonNext";
import redirecTo from "../../utils/redirect";
import LoadingData from "./Loading";

const AreaBody = ({ milestones, onChangeButton, pathRedirect, titleButtonNext }) => {
  
  return (
    <>
    
      <AreaBodyStyled>
        <ListSkillBabiesStyled>
        {milestones.length ?
        milestones.map((x, key) => {
          return (
            <ItemSkillBaby
              key={key}
              id={x.id}
              title={x.title}
              description={x.description}
              answer={x.answer}
              state="0"
              onChangeButton={onChangeButton}
            ></ItemSkillBaby>
          );
        }):
        <LoadingData />
      }
          {}
        </ListSkillBabiesStyled>

        <br />
        <ButtonNext onClick={()=> redirecTo(pathRedirect)} color="#75B753">{titleButtonNext}</ButtonNext>
      </AreaBodyStyled>
    </>
  );
};

export default AreaBody;
