import React, { useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const Circle = () => {
  const circleData = {
    labels: ["concentration", "sleep", "phone", "etc"],
    datasets: [
      {
        data: [30, 15, 25, 1],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#DECBA4", "#e1eec3", "#3E5151", "gray"],
        fill: true,
      },
    ],
  };

  return (
    <React.Fragment>
      <S.circleBox>
        <Doughnut
          options={{
            // title: {
            //   display: true,
            //   text: "카테고리 별",
            //   fontSize: 20,
            // },
            legend: {
              display: true,
              position: "right",
            },
          }}
          data={circleData}
          height={120}
        />
      </S.circleBox>
    </React.Fragment>
  );
};

export default Circle;
