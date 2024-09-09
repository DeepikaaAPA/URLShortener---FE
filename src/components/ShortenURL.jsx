import React, { useState } from "react";
import axios from "axios";
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import instance from "../services/instance";

const ShortenURL = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

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
            <i className="fas fa-link"></i>
          </InputGroup.Text>
          <FormControl
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" onClick={handleShorten}>
          <i className="fas fa-cut"></i> Shorten
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
