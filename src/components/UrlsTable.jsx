import React, { useEffect, useState } from "react";
import { FRONTEND_URL } from "../config/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import instance from "../services/instance";

const UrlsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get("/auth/getURLs")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" table-responsive ">
      <table className="table table-striped border  table-hover table-fixed">
        <thead>
          <tr className="table-primary">
            <th>No</th>
            <th className="table-head">Long URL</th>
            <th className="table-head">Short URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <a className="text-dark" href={item.longUrl}>
                  {item.longUrl}
                </a>
              </td>
              <td>
                {" "}
                <a
                  className="text-dark"
                  href={`${FRONTEND_URL}/shorts/${item.shortnerCode}`}
                >{`${FRONTEND_URL}/shorts/${item.shortnerCode}`}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlsTable;
