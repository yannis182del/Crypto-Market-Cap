import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterUl, StyledLink, LinkDiv } from "./style";
import MarketTable from "../Components/Tables/MartketTable"
import CoinsTables from "../Components/Tables/CoinsTable"

export default function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <RouterUl>
            <LinkDiv>
              <li>
                <StyledLink to="/">Currencies</StyledLink>
              </li>
              <li>
                <StyledLink to="/exchanges">Exhanges</StyledLink>
              </li>
              <li>
                <StyledLink to="/users">Users</StyledLink>
              </li>
              <li>
                <StyledLink to="/trending">Trending</StyledLink>
              </li>
            </LinkDiv>
          </RouterUl>
        </nav>

        <Switch>
          <Route path="/exchanges">
          <MarketTable />
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
            <CoinsTables />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}