import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <h1>This is Header</h1>
      <Wrapper>
        <div>Goole Calendar</div>
        <button>{"<"}</button>
        <button>{">"}</button>
        <div>Month</div>
        <div>Year</div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  justify-content: space-between;
  padding: 1.5em;
  border: 1px solid palevioletred;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default Header;
