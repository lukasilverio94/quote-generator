import "./App.css";
import RandomQuote from "./RandomQuote";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const getRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=inspirational",
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      const randomQuote = response.data[0];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="container">
      <header>
        <h1 id="title">Quote Generator</h1>
      </header>
      {/* Display Quote */}
      <RandomQuote quote={quote} author={author} />
      <button onClick={() => getRandomQuote()}>New Quote</button>
    </div>
  );
}

export default App;
