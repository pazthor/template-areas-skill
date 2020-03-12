import React from 'react'
import styled from "styled-components";
import Spinner from './Spinner';

export const WrapperLoading =  styled.div`
align-items: center;
display: flex;
justify-content: center;
margin: 20px 0 20px;
width: 100%;
`;
export const paragraph = styled.p`
  margin: 0 10px 0;
`;

export default function LoadingData(props) {
  return (
    <WrapperLoading>
      <Spinner />
    </WrapperLoading>
  )
};

