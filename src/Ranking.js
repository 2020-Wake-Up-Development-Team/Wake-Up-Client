import React, { useState } from "react";
import user from "./profile.png";
import * as S from "./style";
import axios from "axios";
import User from "./User";

const Ranking = () => {
  let [value, setValue] = useState("");

  const searchChange = (e) => {
    setValue(e.target.value);
  };
  const userSearch = () => {
    if (window.event.keyCode == 13) console.log(value);
  };
  return (
    <S.mainContainer>
      <S.headerContainer></S.headerContainer>
      <S.contentContainer>
        <S.searchBox>
          <S.search onChange={searchChange} onKeyUp={userSearch} />
        </S.searchBox>
        <S.rankingBox>
          <User />
        </S.rankingBox>
      </S.contentContainer>
    </S.mainContainer>
  );
};

export default Ranking;
