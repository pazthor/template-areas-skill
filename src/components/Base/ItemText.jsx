import styled from 'styled-components';

export default styled.div`
font-size: .8rem;
font-weight: ${({bold}) => bold? '500': '300'};
text-align: left;
color: black;


opacity: 40%;
`;
