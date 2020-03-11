import React from "react";
import AreaHeader from "../../Base/AreaHeader";
import AreaBody from "../../Base/AreaBody";
import WrapperSection from "../../Base/WrapperSection";
import WrapperArea from "../../Base/WrapperArea";
import redirecTo from "../../../utils/redirect";
const SocialEmotionalArea = params => {
  const SocialAreaColor = "#D43571";
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
            titleSkillText={"aqi va el api medianrte icontext"}
            bodySkillText={"boddy el text"}
          ></AreaHeader>
          <AreaBody></AreaBody>
        </WrapperSection>
      </WrapperArea>
    </>
  );
};

export default SocialEmotionalArea;
