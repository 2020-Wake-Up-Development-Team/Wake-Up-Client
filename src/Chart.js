import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const chartState = {
    labels: [
      "20.10.24",
      "20.10.25",
      "20.10.26",
      "20.10.27",
      "20.10.28",
      "20.10.29",
    ],
    datasets: [
      {
        label: "number",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#ffc371",
        borderColor: "black",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 70],
      },
    ],
  };
  return (
    <React.Fragment>
      <S.chartBox>
        <Line
          data={chartState}
          options={{
            title: {
              display: true,
              text: "집중도 분석",
              fontSize: 20,
              fontColor: "black",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </S.chartBox>
    </React.Fragment>
  );
};

export default Chart;
