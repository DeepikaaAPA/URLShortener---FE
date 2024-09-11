import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import instance from "../services/instance";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faLink,
  faCut,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
config.autoAddCss = false;

const ShortenURL = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  //  const user = useLoaderData();

  const handleShorten = async () => {
    try {
      const response = await instance.post("/auth/shorten", { longUrl });
      setShortUrl(response.data.shortUrl);
      setError("");
    } catch (err) {
      setError("Failed to shorten URL");
      setShortUrl("");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">URL Shortener</h1>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faLink} />
          </InputGroup.Text>
          <FormControl
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" onClick={handleShorten}>
          <FontAwesomeIcon icon={faCut} />
          {" " + "Shorten"}
        </Button>
      </Form>
      {shortUrl && (
        <Alert variant="success" className="mt-3">
          <i className="fas fa-check-circle"></i> Short URL:{" "}
          <a href={shortUrl}>{shortUrl}</a>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="mt-3">
          <i className="fas fa-exclamation-circle"></i> {error}
        </Alert>
      )}
    </div>
  );
};

export default ShortenURL;
