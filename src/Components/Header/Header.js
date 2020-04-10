import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { globalInfo } from "../../common/common";
import {
  HeaderDiv,
  InfoDiv,
  MarketCap,
  MarketCapDiv,
  MarketNumber,
} from "./style";

export default function Header() {
  const [marketCap, setMarketCap] = useState(null);
  const [dominance, setDominance] = useState(null);
  const [marketChange, setMarketChange] = useState(null);

  const fetchData = async () => {
    const result = await axios(globalInfo);
    setMarketCap(result.data.data.total_market_cap.usd);
    setDominance(
      parseFloat(result.data.data.market_cap_percentage.btc).toFixed(2)
    );
    setMarketChange(
      parseFloat(result.data.data.market_cap_change_percentage_24h_usd).toFixed(
        2
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HeaderDiv>
      <InfoDiv>
        <MarketCapDiv>
          <MarketCap>
            Market Cap:{" "}
            <MarketNumber>
              <NumberFormat
                value={marketCap}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </MarketNumber>
          </MarketCap>
          <MarketCap>
            Market Change 24h: <MarketNumber>{marketChange}%</MarketNumber>{" "}
          </MarketCap>
          <MarketCap>
            BTC Dominance: <MarketNumber>{dominance}%</MarketNumber>
          </MarketCap>
        </MarketCapDiv>
      </InfoDiv>
    </HeaderDiv>
  );
}
