import styled from 'styled-components';

export default styled.div`
margin-right: auto; /* 1 */
margin-left:  auto; /* 1 */

padding-top: 1rem;
padding-right: 1.6rem; /* 3 */
padding-left:  1.6em; /* 3 */

@media screen and ( min-width: null amd max-width: 539px) {
   max-width:520;
  }
  @media screen and ( min-width: 540 amd max-width: 767px) {
    max-width:748;
   }
   
   @media screen and ( min-width: 768 amd max-width: 1023px) {
    max-width:1004;
   }
  @media screen and ( min-width: 1024px and max-width: 1279px) {
    max-width: 1260;
  }
  @media screen and (min-width: 1280px and max-width: 1439px) {
    max-width: 1420px; /* 2 */
  }
  @media screen and ( min-width: 1440px) {
    max-width: 1420px; /* 2 */
  }
 
`;


