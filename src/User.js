import React, { useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import user from "./profile.png";
import c3 from "c3";
import * as d3 from "d3";
import { useHistory } from "react-router-dom";

const dataList = [10];

const User = () => {
  const history = useHistory();
  const width = 120;

  const detailMove = () => {
    history.push("/data");
  };

  return (
    <React.Fragment>
      <S.userContainer onClick={detailMove}>
        <S.profileBox>
          <S.userImg src={user} />
          <S.userInfo>
            <S.userName>31홍길동</S.userName>
            <S.userId>hong</S.userId>
          </S.userInfo>
        </S.profileBox>
        <S.profileGraph>
          <S.graphValue width></S.graphValue>
        </S.profileGraph>
      </S.userContainer>
      <S.userContainer>
        <S.profileBox>
          <S.userImg src={user} />
          <S.userInfo>
            <S.userName>31홍길동</S.userName>
            <S.userId>hong</S.userId>
          </S.userInfo>
        </S.profileBox>
        <S.profileGraph>
          <S.graphValue width></S.graphValue>
        </S.profileGraph>
      </S.userContainer>
      <S.userContainer>
        <S.profileBox></S.profileBox>
      </S.userContainer>
    </React.Fragment>
  );
};

export default User;
