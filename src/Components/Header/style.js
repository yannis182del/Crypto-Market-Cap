import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: #f7f8fa;
  border-bottom: 1px solid #dfe2eb;
  padding: 2px;
  @media (max-width: 720px) {
    margin: 0;
    padding: 0
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 720px) {
  display: none
  }
`;

export const MarketCap = styled.p`
  font-weight: 500;
  margin-right: 10px;
  color: #7F8DA2 
`;

export const MarketNumber = styled.span`
color: #4785ff
`

export const MarketCapDiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;
