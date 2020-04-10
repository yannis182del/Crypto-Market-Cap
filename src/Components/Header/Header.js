import React from "react";
import { HeaderDiv, InfoDiv, MarketCap } from "./style";

export default function Header() {
  return (
    <HeaderDiv>
      <InfoDiv>
        <MarketCap>Market Cap: $230,201,343</MarketCap>
        <MarketCap>24 hours volume: $20 000 000 </MarketCap>
         <MarketCap>BTC Dominance: 76%</MarketCap>
      </InfoDiv>
    </HeaderDiv>
  );
}
