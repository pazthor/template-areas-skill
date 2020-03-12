import styled from 'styled-components';

const ButtonItem = styled.button`
 
  background: ${props => props.backgroundColor};
  color: ${props => props.color }; 
  
  font-size: 1.2rem;
  font-weight:bold;
  padding: 0.5rem 4rem;
  border: 1px ${props => props.solid? 'solid': 'hidden'} #75B753;
  width:20%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  
  &:disabled {
    opacity: 40%;
    background: #b7b09c;
    color: black;
  }

`;

export default ButtonItem;