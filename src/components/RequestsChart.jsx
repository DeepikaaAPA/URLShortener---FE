import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { Bar } from "react-chartjs-2";

import "bootstrap/dist/css/bootstrap.min.css";
import instance from "../services/instance";
Chart.register(CategoryScale);
function getMonthYearList(startYear, startMonth) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthYearList = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11

  let year = startYear;
  let month = startMonth;

  while (
    year < currentYear ||
    (year === currentYear && month <= currentMonth)
  ) {
    monthYearList.push(`${monthNames[month - 1]}-${year}`);
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  return monthYearList;
}
const RequestsChart = () => {
  const [chartData, setChartData] = useState({});
  const [monthYear, setMonthYear] = useState("");
  const [options, setOptions] = useState([]);

  const fetchData = (monthYear) => {
    instance
      .get("/auth/getClickCount/" + monthYear)
      .then((response) => {
        const data = response.data.results;
        const labels = data.map((item) => item._id);
        const counts = data.map((item) => item.count);
        console.log(data, labels, counts);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Clicks",
              data: counts,
              backgroundColor: ["rgba(75,192,192,1)", "#112233"],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching chart data:", error));
  };

  const fetchOptions = () => {
    const list = getMonthYearList(2024, 1);
    setOptions(list);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (monthYear) {
      fetchData(monthYear);
    }
  }, [monthYear]);

  const handleDropdownChange = (event) => {
    setMonthYear(event.target.value);
  };

  return (
    <div className="chart-container">
      <div className="form-group">
        <label htmlFor="monthYear">Select Month-Year:</label>
        <select
          id="monthYear"
          className="form-control"
          value={monthYear}
          onChange={handleDropdownChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        {chartData?.labels?.length ? (
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Click count",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        ) : (
          <p>No data available for the selected month-year.</p>
        )}
      </div>
    </div>
  );
};

export default RequestsChart;
