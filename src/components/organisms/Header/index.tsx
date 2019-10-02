import React from "react";
import { Wrapper, } from "./style";

const Header: React.FC = props => (
  <Wrapper>
    <div className="header">
      <div className="header__body">{props.children}</div>
    </div>
  </Wrapper>
);

export default Header;
