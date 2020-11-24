import React, { useEffect } from "react";
import * as S from "./style";
import user from "./profile.png";
import { useHistory } from "react-router-dom";

const User = () => {
  const history = useHistory();
  const value = 140; //props.concentration
  const width = `${value}px`;
  const name = "홍길동",
    number = 21,
    id = "hoong",
    school = "대덕소프트웨어 마이스터 고등학교";

  const detailMove = () => {
    history.push({
      pathname: "/data",
      state: {
        id: id,
        name: name,
        number: number,
        school: school,
      },
    });
  };

  return (
    <React.Fragment>
      <S.userContainer onClick={detailMove}>
        <S.profileBox>
          <S.userImg src={user} />
          <S.userInfo>
            <S.userName>
              {number}
              {name}
            </S.userName>
            <S.userId>{id}</S.userId>
            <S.school>{school}</S.school>
          </S.userInfo>
        </S.profileBox>
        <S.profileGraph>
          <S.graphValue width={width}>
            <S.value>10</S.value>
          </S.graphValue>
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
    </React.Fragment>
  );
};

export default User;
