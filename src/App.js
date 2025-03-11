import React, { useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("");
  const [ sentiment, setSentiment ] = useState("");

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/analyze/", {
        text: text
      });
      setSentiment(response.data.sentiment);
    } catch (error) {
      setSentiment("Error analyzing sentiment");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Sentiment Analysis App</h2>
      <textarea
        className="form-control my-3"
        row="4"
        placeholder="Enter text to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={analyzeSentiment}>Analyze</button>
      {sentiment && <h4 className="mt-3">Result: {sentiment}</h4>}
    </div>
  );
}

export default App;
