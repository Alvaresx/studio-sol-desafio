import React from "react";
import * as Styled from "../styles/style";

function Header() {
  return (
    <>
      <div>
        <Styled.Title>Qual é o número?</Styled.Title>
        <Styled.Divider data-testid="divider"></Styled.Divider>
      </div>
    </>
  );
}

export default Header;
