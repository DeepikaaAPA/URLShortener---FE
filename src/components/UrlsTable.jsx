import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import instance from "../services/instance";
const FRONTEND_URL = "http://localhost:5173/shorts";
const UrlsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get("/auth/getURLs")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="">
      <table className=" table-responsive table table-striped border  table-hover">
        <thead >
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
                  href={`${FRONTEND_URL}/${item.shortnerCode}`}
                >{`${FRONTEND_URL}/${item.shortnerCode}`}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlsTable;
