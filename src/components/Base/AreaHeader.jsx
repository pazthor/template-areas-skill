import React from "react";
import PropTypes from "prop-types";
import AreaHeaderStyled from "./AreaHeaderStyled";
import Button from "./Button";
import PillStyled from "./PillStyled";
import TitleAreas from "./TitleAreas";
import Line from "./Line";
import TitleSkill from "./TitleSkill";
import BodySkill from "./BodySkill";

const AreaHeader = ({
  color,
  isActivePhysical,
  isActiveSocial,
  onClickSocial,
  onClickPhysical,
  titleSkillText,
  bodySkillText
}) => {
  return (
    <>
      <AreaHeaderStyled color={color}>
        <TitleAreas>Areas</TitleAreas>
        <PillStyled id="pildora">
          <Button
            pillLeft
            isActive={isActivePhysical}
            onClick={onClickPhysical}
            color={color}
          >
            Physical
          </Button>
          <Button
            pillRight
            isActive={isActiveSocial}
            onClick={onClickSocial}
            color={color}
          >
            Social & Emotional
          </Button>
        </PillStyled>
        <Line color="white" width="40%" />

        <TitleSkill>{titleSkillText}</TitleSkill>

        <BodySkill>{bodySkillText}</BodySkill>
      </AreaHeaderStyled>
    </>
  );
};

AreaHeader.propTypes = {
  onClickPhysical: PropTypes.func.isRequired,
  onClickSocial: PropTypes.func.isRequired,
  titleSkillText: PropTypes.string.isRequired,
  bodySkillText: PropTypes.string.isRequired,
  isActivePhysical: PropTypes.bool.isRequired,
  isActiveSocial: PropTypes.bool.isRequired
};

export default AreaHeader;
