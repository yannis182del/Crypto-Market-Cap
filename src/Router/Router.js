import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterUl, StyledLink, LinkDiv } from "./style";
import MarketTable from "../Components/Tables/MartketTable";
import CoinsTables from "../Components/Tables/CoinsTable";
import TrendingCards from "../Components/Cards/TrendingCards";

export default function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <RouterUl>
            <LinkDiv>
              <li>
                <StyledLink to="/currency">Currencies</StyledLink>
              </li>
              <li>
                <StyledLink to="/exchanges">Exhanges</StyledLink>
              </li>
              <li>
                <StyledLink to="/trending">Trending</StyledLink>
              </li>
              <li>
                <StyledLink to="/scanner">Coin scanner</StyledLink>
              </li>
            </LinkDiv>
          </RouterUl>
        </nav>
        <Switch>
          <Route path="/currency">
            <CoinsTables />
          </Route>
          <Route path="/exchanges">
            <MarketTable />
          </Route>
          <Route path="/trending">
            <TrendingCards />
          </Route>
          <Route path="/scanner">
            <CoinsTables />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
