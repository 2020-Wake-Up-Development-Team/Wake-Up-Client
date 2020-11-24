import React, { useEffect, useState } from "react";
import * as S from "./style";
import user from "./profile.png";
import { useHistory } from "react-router-dom";

const User = () => {
  const [graphWidth, setGrapWidth] = useState(`120px`);
  const history = useHistory();
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
  useEffect(() => {
    console.log(graphWidth);
  }, []);
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
          <S.graphValue width={"100px"}>
            <S.value>10</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
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
          <S.graphValue width={"120px"}>
            <S.value>20</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
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
          <S.graphValue width={"140px"}>
            <S.value>30</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
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
          <S.graphValue width={"160px"}>
            <S.value>40</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
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
          <S.graphValue width={"200px"}>
            <S.value>50</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
    </React.Fragment>
  );
};

export default User;
