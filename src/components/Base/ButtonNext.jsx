import styled from 'styled-components';

const ButtonNext = styled.button`
 display:flex;
  background: ${props => props.color}; // cambiar
  color: white; 
  width: 40%;
  font-size: 1.3rem;
  font-weight:bold;
  padding: 0.7rem 2rem;
  border: 1px solid #75B753;
  justify-content: center;
  align-self: center;



  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  
  &:disabled {
    opacity: 40%;
    background: #b7b09c;
  }

`;

export default ButtonNext;