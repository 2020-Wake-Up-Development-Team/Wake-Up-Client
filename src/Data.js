import React from "react";
import Chart from "./Chart";
import Circle from "./Circle";
import * as S from "./style";
import axios from "axios";

const Data = () => {
  return (
    <S.mainContainer>
      <S.contentContainer>
        <S.profileContainer>
          <S.profile />
          <S.inUser>
            <S.profileName>31홍길동</S.profileName>
            <S.profileId>hong</S.profileId>
          </S.inUser>
        </S.profileContainer>
        <S.dataContainer>
          <S.title>name 님의 수업 집중도 통계 자료입니다.</S.title>
          <Circle />
          <Chart />
        </S.dataContainer>
      </S.contentContainer>
    </S.mainContainer>
  );
};

export default Data;
