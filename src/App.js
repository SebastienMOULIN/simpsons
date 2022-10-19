import axios from "axios";
import React, { useEffect, useState } from "react";
import QuoteList from "./components/QuoteList";

function App() {
  const [data, setData] = useState([]);
  const getDataFromApi = async () => {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    setData(response.data);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <div>
      <QuoteList quoteList={data} />
    </div>
  );
}

export default App;
