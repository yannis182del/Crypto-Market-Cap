import styled from "styled-components";
import { Link } from "react-router-dom";

export const RouterUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #dfe2eb;
  padding-bottom: 2%;
  color: blue;
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  color: #7f8da2;
  display: block;
  margin: 0.5em 0;
  font-size: 18px;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #4785ff;
  }
  &.active {
    text-decoration: underline;
    color: #4785ff;
  }
`;

export const LinkDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
