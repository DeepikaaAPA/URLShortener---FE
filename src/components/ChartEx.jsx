import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

import { Bar } from "react-chartjs-2";

// App.js
const Data = {
  year: [1, 2, 3, 4, 5],
  userGain: [1, 2, 3, 4, 5],
};

Chart.register(CategoryScale);

function ChartEx() {
  const [chartData, setChartData] = useState({
    labels: Data.year,
    datasets: [
      {
        label: "Users Gained ",
        data: Data.userGain,
        backgroundColor: [
          "rgba(75,192,192,1)",

          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default ChartEx;
