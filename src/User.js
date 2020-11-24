import React, { useEffect, useState } from "react";
import * as S from "./style";
import user from "./profile.png";
import { useHistory } from "react-router-dom";

const User = () => {
  const [graphWidth, setGrapWidth] = useState(`120px`);
  const history = useHistory();
  const name = "김해린",
    number = 22,
    id = "rin22",
    school = "대덕 SW 마이스터 고등학교";

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
            <S.userName>22김해린</S.userName>
            <S.userId>rin22</S.userId>
            <S.school>대덕 SW 마이스터 고등학교</S.school>
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
            <S.userName>22변웅섭</S.userName>
            <S.userId>sub22</S.userId>
            <S.school>광주 SW 마이스터 고등학교</S.school>
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
            <S.userName>21강민석</S.userName>
            <S.userId>min21</S.userId>
            <S.school>대구 SW 마이스터 고등학교</S.school>
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
            <S.userName>23김난희</S.userName>
            <S.userId>kim23</S.userId>
            <S.school>대덕 SW 마이스터 고등학교</S.school>
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
            <S.userName>21이도운</S.userName>
            <S.userId>lee21</S.userId>
            <S.school>광주 SW 마이스터 고등학교</S.school>
          </S.userInfo>
        </S.profileBox>
        <S.profileGraph>
          <S.graphValue width={"200px"}>
            <S.value>50</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
      <S.userContainer onClick={detailMove}>
        <S.profileBox>
          <S.userImg src={user} />
          <S.userInfo>
            <S.userName>22성헌</S.userName>
            <S.userId>sung22</S.userId>
            <S.school>대구 SW 마이스터 고등학교</S.school>
          </S.userInfo>
        </S.profileBox>
        <S.profileGraph>
          <S.graphValue width={"220px"}>
            <S.value>70</S.value>
          </S.graphValue>
        </S.profileGraph>
      </S.userContainer>
    </React.Fragment>
  );
};

export default User;
