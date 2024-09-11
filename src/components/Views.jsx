import React from "react";
import UrlsTable from "./UrlsTable";
// import RequestsChart from "./RequestsChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import RequestsChart from "./RequestsChart";
import ChartEx from "./ChartEx";
config.autoAddCss = false;

const Views = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 pe-5">
          <h4 className="m-4 text-success">
            <FontAwesomeIcon icon={faTable} /> URLs Table
          </h4>
          <UrlsTable />
        </div>
        <div className="col-md-6 pe-5">
          <h4 className="m-4 text-success">
            <FontAwesomeIcon icon={faChartBar} /> Requests Chart
          </h4>
          <RequestsChart />
        </div>
      </div>
    </div>
  );
};

export default Views;
