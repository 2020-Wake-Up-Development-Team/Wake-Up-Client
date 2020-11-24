import React, { useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const Circle = () => {
  const circleData = {
    labels: ["eat", "sleep", "phone"],
    datasets: [
      {
        data: [60, 15, 25],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#DECBA4", "#e1eec3", "#3E5151"],
        fill: true,
      },
    ],
  };

  return (
    <React.Fragment>
      <S.circleBox>
        <Doughnut
          options={{
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
