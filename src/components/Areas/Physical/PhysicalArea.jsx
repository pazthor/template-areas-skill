import React from "react";
import AreaHeader from "../../Base/AreaHeader";
import AreaBody from "../../Base/AreaBody";
import WrapperArea from "../../Base/WrapperArea";
import WrapperSection from "../../Base/WrapperSection";
import redirecTo from "../../../utils/redirect";
const PhysicalArea = params => {
  const physicalAreaColor = "#1FADDF";

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
            titleSkillText={"aqi va el api medianrte icontext"}
            bodySkillText={"boddy el text"}
          ></AreaHeader>
          <AreaBody></AreaBody>
        </WrapperSection>
      </WrapperArea>{" "}
    </>
  );
};

export default PhysicalArea;
