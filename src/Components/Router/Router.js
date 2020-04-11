import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterUl, StyledLink, LinkDiv } from "./style";
import Table from "../Table.js/Table";

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
                <StyledLink to="/about">About</StyledLink>
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
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}