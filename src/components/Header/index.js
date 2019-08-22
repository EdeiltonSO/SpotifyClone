import React from "react";
import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://lh3.googleusercontent.com/-ga7p24zIEWo/XO1cRACrQMI/AAAAAAAAFcg/KCr_1YljYc0LhlzNjfPY79JbSInoQTnLgCEwYBhgL/w140-h140-p/IMG_20190409_000907_087.jpg"
        alt="User"
      />
      Edeilton Oliveira
    </User>
  </Container>
);

export default Header;
