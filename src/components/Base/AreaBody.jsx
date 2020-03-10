import React from 'react'
import AreaBodyStyled from './AreaBodyStyled';
import Line from './Line';
import ListSkillBabiesStyled from './ListSkillBabiesStyled';
import ItemSkillBaby from './ItemSkillBaby';
import ButtonNext from './ButtonNext';

const AreaBody = (params) => {
    const colorLine = '#d3d3d3';
    return (
        <>
        <AreaBodyStyled> 
        <ListSkillBabiesStyled>    
            <ItemSkillBaby state='0'></ItemSkillBaby>
            <Line color={colorLine} width='100%' borderWidth='1px' />
            <ItemSkillBaby state='1' uncomplete={true} ></ItemSkillBaby>
            <Line color={colorLine} width='100%' borderWidth='1px'/>
            <ItemSkillBaby state ='2' disabled={true} ></ItemSkillBaby>
            <Line color={colorLine} width='100%'  borderWidth='1px'/>
            <ItemSkillBaby state= '0' ></ItemSkillBaby>
            
        </ListSkillBabiesStyled>
            
          <br />
          <ButtonNext color="#75B753">
          Next
          </ButtonNext>
      
        </AreaBodyStyled>
        </>
    )
}

export default AreaBody;