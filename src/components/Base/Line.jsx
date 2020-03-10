import styled from 'styled-components';

export default styled.div`
width: ${props => props.width};
  padding-top:1rem;
    border-bottom: ${props=> props.borderWidth?props.borderWidth: '2px'} solid ${props => props.color};
`;


