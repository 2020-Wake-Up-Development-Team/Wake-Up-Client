import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Circle from "./Circle";
import * as S from "./style";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Data = (baseUrl) => {
  let [loading, setLoading] = useState(false);
  let [chartData, setChart] = useState([]);
  let [circleData, setCircle] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.state != undefined) {
      setLoading(true);
      console.log(location.state.id);
      // axios.get(baseUrl + '/concentration/detail/circle-chart/' + id, config)
      // .then((res) => {
      //   console.log(res);
      //  setCircle(res.data);
      // })
      // axios.get(baseUrl + '/concentration/detail/linear-chart/' + id, config)
      // .then((res) => {
      //   console.log(res);
      //   setChart(res.data);
      // })
    } else setLoading(false);
  });
  return (
    <S.mainContainer>
      {loading ? (
        <S.contentContainer data>
          <S.profileContainer>
            <S.profile />
            <S.inUser>
              <S.profileName>
                {location.state.number}
                {location.state.name}
              </S.profileName>
              <S.profileId>{location.state.id}</S.profileId>
              <S.school>{location.state.school}</S.school>
            </S.inUser>
          </S.profileContainer>

          <S.dataContainer>
            <S.title>나의 집중도 통계 자료</S.title>
            <Circle />
            <Chart />
          </S.dataContainer>
        </S.contentContainer>
      ) : (
        <div></div>
      )}
    </S.mainContainer>
  );
};

export default Data;
