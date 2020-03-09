import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#75B753" : props.isActive?"white":props.color};
  color: ${props => props.primary ? "white" : props.isActive? props.color: "white"};
  width: ${props => props.primary ?"100%": "50%"};
  font-size: .7rem;
  font-weight:bold;
  //margin: 1em;
  padding: 1em 2em;
  border: 1px solid ${props => props.primary ? '#75B753':"white" };


  border-top-left-radius: ${props => props.pillLeft ?"17px":"0px"};
  border-bottom-left-radius: ${props => props.pillLeft ?"17px":"0px"};
  border-bottom-right-radius: ${props => props.pillRight ?"17px;":"0px"};
  border-top-right-radius: ${props => props.pillRight ?"17px;":"0px"};

`;

export default Button;