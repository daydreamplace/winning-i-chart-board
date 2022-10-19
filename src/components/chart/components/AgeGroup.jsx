import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const AgeGroup = () => {
  const data = {
    series: [59, 65, 41, 40, 38],
    options: {
      labels: ["20's", "30's", "40's", "50's", "60's"],
    },
  };

  return (
    <AgeChart>
      <h1>Age Group Chart</h1>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width={450}
      />
    </AgeChart>
  );
};

const AgeChart = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AgeGroup;
